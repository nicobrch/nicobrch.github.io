import { CustomMDX } from "@/components/mdx";
import { getBlogPosts } from "@/lib/content"

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
    <section className="w-full px-8">
      <h1 className="title font-medium text-2xl tracking-tighter">
        {post.metadata.title}
      </h1>
      <h2 className="title font-regular text-md tracking-tighter">
        {post.metadata.description}
      </h2>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        {post.metadata.publishedAt}
      </div>
      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        <CustomMDX source={post.content}/>
      </article>
    </section>
  )
}