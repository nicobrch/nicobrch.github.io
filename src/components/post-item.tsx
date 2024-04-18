import Link from "next/link"

type PostItemProps = {
  title: string;
  publishedAt: string;
  summary?: string;
  description?: string;
  slug: string;
};

export default function PostItem({ slug, title, publishedAt, summary, description }: PostItemProps) {
  return (
    <article className="max-w-2xl mx-6 border-b">
      <div>
        <h2 className="text-2xl font-bold">
          <Link href={`/ayudantias/${slug}`}>{title}</Link>
        </h2>
      </div>
      <div className="font-regular text-md">{description}</div>
      <div className="mt-1 text-sm mb-2">Publicado: {publishedAt}</div>
    </article>
  )
}