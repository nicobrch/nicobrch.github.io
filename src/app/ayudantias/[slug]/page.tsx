import { CustomMDX } from "@/components/mdx";
import { getBlogPosts } from "@/lib/content"
import type { Metadata } from 'next';
import DownloadButton from "@/components/button/download-button";

export async function generateMetadata({params}: any): Promise<Metadata | undefined> {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }
  return {
    title: post.metadata.title,
    description: post.metadata.description,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.description,
      publishedTime: post.metadata.publishedAt,
      type: 'article',
      url: `https://nicobrch.github.io/blog/${post.slug}`,
    },
  };
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPost({ params }: { params: { slug: string } }){
  const post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return <h2>Post not found</h2>
  }

  return (
    <section className="max-w-2xl mx-6">
      <h1 className="title font-medium text-2xl">
        {post.metadata.title}
      </h1>
      <h2 className="title font-regular text-md">
        {post.metadata.description}
      </h2>
      <div className="flex justify-between items-center mt-1 mb-6 text-sm">
        Publicado: {post.metadata.publishedAt}
        {post.metadata.download_url && (
          <DownloadButton url={post.metadata.download_url}/>
        )}
      </div>
      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        <CustomMDX source={post.content}/>
      </article>
    </section>
  )
}