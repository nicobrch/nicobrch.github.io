import { getBlogPosts } from "@/lib/content";
import PostItem from "@/components/posts/postItem";

export default function BlogHome() {
  const posts = getBlogPosts();
  
  return (
    <section>
      {posts.map((post) => (
        <PostItem
          key={post.slug}
          title={post.metadata.title}
          publishedAt={post.metadata.publishedAt}
          summary={post.metadata.summary}
          slug={post.slug}
          description={post.metadata.description}
        />
      ))}
    </section>
  );
}