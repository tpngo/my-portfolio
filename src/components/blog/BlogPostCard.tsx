import { Link } from "react-router-dom";
import type { BlogPostSummary } from "../../types/content";
import { Card } from "../ui/Card";
import { TagList } from "../ui/TagList";

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
  }).format(new Date(iso));
}

type BlogPostCardProps = {
  post: BlogPostSummary;
};

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Card as="article" className="blog-card">
      <Link to={`/blog/${post.slug}`} className="blog-card__link">
        <time className="blog-card__date" dateTime={post.publishedAt}>
          {formatDate(post.publishedAt)}
        </time>
        <h2 className="blog-card__title">{post.title}</h2>
        <p className="blog-card__summary">{post.summary}</p>
        <TagList tags={post.tags} />
        <span className="blog-card__cta">Read article</span>
      </Link>
    </Card>
  );
}
