import { PageLayout } from "../components/layout/PageLayout";
import { BlogPostCard } from "../components/blog/BlogPostCard";
import { SectionHeading } from "../components/ui/SectionHeading";
import { EmptyState } from "../components/ui/EmptyState";
import { ErrorState } from "../components/ui/ErrorState";
import { Skeleton } from "../components/ui/Skeleton";
import { useAsyncData } from "../hooks/useAsyncData";
import { fetchBlogPosts } from "../services/contentService";

export function BlogPage() {
  const state = useAsyncData("blog", fetchBlogPosts);

  return (
    <PageLayout>
      <main id="main-content" className="page-main" tabIndex={-1}>
        <SectionHeading
          id="blog-heading"
          title="Technical blog"
          description="Research summaries, learnings, and little breakthroughs—documented and shared."
        />
        {state.status === "loading" ? (
          <div className="blog-list" aria-hidden="true">
            <Skeleton variant="card" count={2} />
          </div>
        ) : null}
        {state.status === "error" ? (
          <ErrorState
            title="Failed to load blog posts"
            message={state.error.message}
            onRetry={() => window.location.reload()}
          />
        ) : null}
        {state.status === "success" && state.data.length === 0 ? (
          <EmptyState title="No posts yet" message="New articles will show up here when published." />
        ) : null}
        {state.status === "success" && state.data.length > 0 ? (
          <ul className="blog-list">
            {state.data.map((post) => (
              <li key={post.slug}>
                <BlogPostCard post={post} />
              </li>
            ))}
          </ul>
        ) : null}
      </main>
    </PageLayout>
  );
}
