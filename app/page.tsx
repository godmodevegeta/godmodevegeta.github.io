import Link from 'next/link';
import { posts } from '@/lib/posts';

export default function Home() {
  const popularPosts = posts.filter(p => p.isPopular);
  const latestPosts = posts.filter(p => !p.isPopular);

  return (
    <main className="max-w-[720px] mx-auto px-6 py-16 md:py-24 space-y-20">
      
      {/* Header / Bio */}
      <section className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Alex Rivera</h1>
        <p className="text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-200">Welcome!</p>
        
        <div className="text-lg leading-[1.8] text-gray-800 dark:text-gray-200 space-y-4">
          <p>
            I'm a software engineer and designer. Currently, I'm building <Link href="#">Nexus</Link>, a platform for seamless data sync across modern web apps. Before this, I worked on infrastructure at <Link href="#">Stripe</Link> and <Link href="#">Vercel</Link>, helping teams deploy code faster and more reliably.
          </p>
          <p>
            In my free time, I write about engineering leadership, UI design, and web architecture. I also occasionally invest in developer tool startups. 
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="space-y-4">
        <h2 className="text-base font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Get in touch</h2>
        <p className="text-lg leading-[1.8] text-gray-800 dark:text-gray-200 border-none">
          The best way to reach me is via Twitter <Link href="#">@arivera</Link> or email at <a href="mailto:hello@example.com">hello@example.com</a>.
        </p>
      </section>

      {/* Popular Posts */}
      <section className="space-y-6">
        <h2 className="text-base font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Popular</h2>
        <div className="space-y-8">
          
          {popularPosts.map((post) => (
            <article key={post.slug} className="space-y-1">
              <h3 className="text-lg font-semibold">
                <Link href={`/posts/${post.slug}`} className="text-gray-900 dark:text-gray-100 no-underline hover:underline decoration-gray-300 dark:decoration-gray-600 underline-offset-4">
                  {post.title}
                </Link>
              </h3>
              {post.subtitle && <p className="text-gray-600 dark:text-gray-400 text-base">{post.subtitle}</p>}
              <time className="block text-sm text-gray-400 dark:text-gray-500 pt-1">{post.date}</time>
            </article>
          ))}

        </div>
      </section>

      {/* Latest Posts */}
      <section className="space-y-6">
        <h2 className="text-base font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Latest Posts</h2>
        <div className="space-y-5">
          
          {latestPosts.map((post) => (
             <div key={post.slug} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
              <Link href={`/posts/${post.slug}`} className="text-lg text-gray-900 dark:text-gray-100 no-underline hover:underline decoration-gray-300 dark:decoration-gray-600 underline-offset-4">
                {post.title}
              </Link>
              <time className="text-sm text-gray-400 dark:text-gray-500 shrink-0">{post.date}</time>
            </div>
          ))}

        </div>
      </section>
      
    </main>
  );
}
