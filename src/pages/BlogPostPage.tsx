import { Link, useParams } from "react-router-dom";
import { MarkdownArticle } from "../components/content/MarkdownArticle";
import { PageLayout } from "../components/layout/PageLayout";
import { EmptyState } from "../components/ui/EmptyState";
import { ErrorState } from "../components/ui/ErrorState";
import { Skeleton } from "../components/ui/Skeleton";
import { TagList } from "../components/ui/TagList";
import { useAsyncData } from "../hooks/useAsyncData";
import { fetchBlogPostBySlug } from "../services/contentService";

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en", {
    dateStyle: "long",
  }).format(new Date(iso));
}

export function BlogPostPage() {
  const { slug = "" } = useParams();
  const state = useAsyncData(`blog:${slug}`, () => fetchBlogPostBySlug(slug));

  return (
    <PageLayout>
      <main id="main-content" className="page-main page-main--article" tabIndex={-1}>
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <ol className="breadcrumb__list">
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="breadcrumb__current">Article</li>
          </ol>
        </nav>
        {state.status === "loading" ? (
          <>
            <Skeleton variant="title" />
            <Skeleton variant="text" count={6} />
          </>
        ) : null}
        {state.status === "error" ? (
          <ErrorState
            title="Could not load article"
            message={state.error.message}
            onRetry={() => window.location.reload()}
          />
        ) : null}
        {state.status === "success" && !state.data ? (
          <EmptyState
            title="Post not found"
            message="This article may be unpublished or the URL is wrong."
          />
        ) : null}
        {state.status === "success" && state.data ? (
          <article className="blog-article">
            <header className="blog-article__header">
              <h1>{state.data.title}</h1>
              <p className="blog-article__meta">
                <time dateTime={state.data.publishedAt}>{formatDate(state.data.publishedAt)}</time>
              </p>
              <TagList tags={state.data.tags} />
            </header>
            <MarkdownArticle markdown={state.data.bodyMarkdown} />
            <footer className="blog-article__footer">
              <p>
                <Link to="/blog">← Back to blog</Link>
              </p>
            </footer>
          </article>
        ) : null}
      </main>
    </PageLayout>
  );
}
