import { notFound } from 'next/navigation';
import { posts } from '@/lib/posts';
import Link from 'next/link';

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="max-w-[720px] mx-auto px-6 py-16 md:py-24 space-y-12">
      <Link 
        href="/"
        className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 no-underline transition-colors block mb-12"
      >
        ← Home
      </Link>
      
      <article className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400">
            <time>{post.date}</time>
          </div>
        </header>

        <div 
          className="prose prose-lg dark:prose-invert prose-p:leading-[1.8] prose-p:text-gray-800 dark:prose-p:text-gray-200 max-w-none"
        >
          {post.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('### ')) {
              return <h3 key={index} className="text-xl font-semibold mt-8 mb-4">{paragraph.replace('### ', '')}</h3>;
            }
            if (paragraph.startsWith('- ')) {
               const items = paragraph.split('\n').map(i => i.replace('- ', ''));
               return (
                 <ul key={index} className="list-disc pl-6 space-y-2 my-4">
                   {items.map((item, i) => <li key={i}>{item}</li>)}
                 </ul>
               );
            }
            return (
              <p key={index} dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
            );
          })}
        </div>
      </article>
      
      <div className="pt-12 border-t border-gray-200 dark:border-gray-800">
        <Link 
          href="/"
          className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 no-underline transition-colors block"
        >
          ← Back to all posts
        </Link>
      </div>
    </main>
  );
}
