import { getBlogPosts } from "@/lib/content";
import PostItem from "@/components/post-item";

export const metadata = {
  title: "ayudantias",
  description: 'Textos, publicaciones, o cualquier cosa sobre ingeniería de software.',
};

export default function BlogHome() {
  const posts = getBlogPosts();

  // Sort the posts based on the publishedAt date in descending order
  posts.sort((a, b) => {
    const dateA = new Date(a.metadata.publishedAt);
    const dateB = new Date(b.metadata.publishedAt);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <section className="flex flex-col gap-6">
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