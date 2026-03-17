import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export type Post = {
  slug: string;
  title: string;
  date: string;
  subtitle?: string;
  content: string;
  isPopular?: boolean;
};

export function getPosts(): Post[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => {
        // Remove ".md" from file name to get slug
        const slug = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        return {
          slug,
          content: matterResult.content,
          title: matterResult.data.title,
          date: matterResult.data.date,
          subtitle: matterResult.data.subtitle,
          isPopular: matterResult.data.isPopular,
        } as Post;
      });

    // Sort posts by date
    return allPostsData.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  } catch (error) {
    console.error('Error reading posts:', error);
    return [];
  }
}

export async function getPostHtml(content: string): Promise<string> {
  const processedContent = await remark()
    .use(html)
    .process(content);
  return processedContent.toString();
}

export const posts = getPosts();
