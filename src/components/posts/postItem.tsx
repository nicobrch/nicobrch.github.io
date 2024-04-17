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
    <article className="flex flex-col gap-2 border-border border-b py-3">
      <div>
        <h2 className="text-2xl font-bold">
          <Link href={slug}>{title}</Link>
        </h2>
      </div>
      <div className="max-w-none text-muted-foreground">{description}</div>
    </article>
  )
}