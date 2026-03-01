// app.js
const App = {
    content: null,
    posts: [],
    
    init() {
        this.content = document.getElementById('content');
        this.handleRoute();
        window.addEventListener('popstate', () => this.handleRoute());
        
        // Intercept link clicks for SPA behavior
        document.addEventListener('click', (e) => {
            if (e.target.tagName === 'A' && e.target.href.startsWith(window.location.origin)) {
                e.preventDefault();
                const path = new URL(e.target.href).pathname;
                history.pushState(null, '', path);
                this.handleRoute();
            }
        });
    },

    async handleRoute() {
        const path = window.location.pathname;
        this.content.innerHTML = '<div class="loading">LOADING...</div>';
        
        try {
            if (path === '/' || path === '/index.html') {
                await this.renderHome();
            } else if (path === '/about') {
                await this.renderPage('about');
            } else if (path === '/archive') {
                await this.renderArchive();
            } else if (path.startsWith('/')) {
                const slug = path.slice(1);
                if (slug) await this.renderPost(slug);
            }
        } catch (err) {
            this.renderError('Failed to load content');
        }
    },

    async loadManifest() {
        // Try to load manifest.json first, fallback to scanning
        try {
            const res = await fetch('manifest.json');
            if (res.ok) return await res.json();
        } catch (e) {
            // Fallback: assume standard posts
            return null;
        }
    },

    async getPosts() {
        if (this.posts.length > 0) return this.posts;
        
        const manifest = await this.loadManifest();
        if (manifest) {
            this.posts = manifest.posts;
            return this.posts;
        }
        
        // Fallback: hardcoded list (replace with your actual posts)
        this.posts = [
            { slug: 'why-minimalism', title: 'Why I Chose Minimalism', date: '2025-02-28', excerpt: 'The web has become bloated...' },
            { slug: 'beauty-of-plain-text', title: 'The Beauty of Plain Text', date: '2025-02-15', excerpt: 'There is something honest about plain text...' },
            { slug: 'digital-gardens', title: 'Digital Gardens vs Blogs', date: '2025-01-30', excerpt: 'Blogs are chronological. Gardens are topological...' }
        ];
        return this.posts;
    },

    async renderHome() {
        const posts = await this.getPosts();
        const recent = posts.slice(0, 5);
        
        let html = '<ul class="post-list">';
        recent.forEach(post => {
            html += `
                <li class="post-item">
                    <div class="post-date">[ ${post.date} ]</div>
                    <h2 class="post-title">${post.title}</h2>
                    <p class="post-excerpt">${post.excerpt || 'Click to read more...'}</p>
                    <a href="/${post.slug}" class="post-link">[READ_FULL_POST]</a>
                </li>
            `;
        });
        html += '</ul>';
        
        this.content.innerHTML = html;
    },

    async renderPost(slug) {
        try {
            const res = await fetch(`posts/${slug}.md`);
            if (!res.ok) throw new Error('Not found');
            
            const md = await res.text();
            const { meta, content } = this.parseMarkdown(md);
            
            const html = `
                <article class="post-full">
                    <div class="post-date">[ ${meta.date || 'UNKNOWN DATE'} ]</div>
                    <h1>${meta.title || slug}</h1>
                    <div class="post-content">${this.markdownToHtml(content)}</div>
                    <a href="/" class="back-link">[ < RETURN ]</a>
                </article>
            `;
            
            this.content.innerHTML = html;
        } catch (err) {
            this.renderError(`Post "${slug}" not found`);
        }
    },

    async renderPage(page) {
        try {
            const res = await fetch(`pages/${page}.md`);
            if (!res.ok) throw new Error('Not found');
            
            const md = await res.text();
            const { meta, content } = this.parseMarkdown(md);
            
            this.content.innerHTML = `
                <article class="post-full">
                    <h1>${meta.title || page.toUpperCase()}</h1>
                    <div class="post-content">${this.markdownToHtml(content)}</div>
                </article>
            `;
        } catch (err) {
            this.renderError(`Page "${page}" not found`);
        }
    },

    async renderArchive() {
        const posts = await this.getPosts();
        
        let html = '<h2 class="post-title" style="margin-bottom: 2rem;">ARCHIVE</h2><ul class="archive-list">';
        posts.forEach(post => {
            html += `
                <li class="archive-item">
                    <span class="archive-date">[${post.date}]</span>
                    <a href="/${post.slug}" class="archive-title">${post.title}</a>
                </li>
            `;
        });
        html += '</ul>';
        
        this.content.innerHTML = html;
    },

    parseMarkdown(md) {
        const lines = md.split('\n');
        const meta = {};
        let contentStart = 0;
        
        // Parse YAML frontmatter if exists
        if (lines[0] === '---') {
            let i = 1;
            while (i < lines.length && lines[i] !== '---') {
                const match = lines[i].match(/^(\w+):\s*(.+)$/);
                if (match) meta[match[1]] = match[2];
                i++;
            }
            contentStart = i + 1;
        }
        
        const content = lines.slice(contentStart).join('\n').trim();
        return { meta, content };
    },

    markdownToHtml(md) {
        return md
            // Headers
            .replace(/^### (.*$)/gim, '<h3>$1</h3>')
            .replace(/^## (.*$)/gim, '<h2>$1</h2>')
            .replace(/^# (.*$)/gim, '<h1>$1</h1>')
            // Bold/Italic
            .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
            .replace(/\*(.*)\*/gim, '<em>$1</em>')
            // Code blocks
            .replace(/```([\s\S]*?)```/gim, '<pre><code>$1</code></pre>')
            // Inline code
            .replace(/`([^`]+)`/gim, '<code>$1</code>')
            // Links
            .replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2">$1</a>')
            // Blockquotes
            .replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>')
            // Lists
            .replace(/^\- (.*$)/gim, '<li>$1</li>')
            // Paragraphs (must be last)
            .replace(/\n\n/gim, '</p><p>')
            .replace(/^(?!<[hl]|<li|<bl|<pr)(.+)$/gim, '<p>$1</p>')
            // Clean up list wrapping
            .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
            // Line breaks
            .replace(/\n/gim, '<br>');
    },

    renderError(msg) {
        this.content.innerHTML = `<div class="error">ERROR: ${msg}</div>`;
    }
};

// Start
document.addEventListener('DOMContentLoaded', () => App.init());