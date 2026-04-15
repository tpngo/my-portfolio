import { Link, useParams } from "react-router-dom";
import { PageLayout } from "../components/layout/PageLayout";
import { CodeBlock } from "../components/ui/CodeBlock";
import { EmptyState } from "../components/ui/EmptyState";
import { ErrorState } from "../components/ui/ErrorState";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Skeleton } from "../components/ui/Skeleton";
import { TagList } from "../components/ui/TagList";
import { useAsyncData } from "../hooks/useAsyncData";
import { fetchProjectBySlug } from "../services/contentService";

export function ProjectDetailPage() {
  const { slug = "" } = useParams();
  const state = useAsyncData(`project:${slug}`, () => fetchProjectBySlug(slug));

  return (
    <PageLayout>
      <main id="main-content" className="page-main page-main--article" tabIndex={-1}>
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <ol className="breadcrumb__list">
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="breadcrumb__current">Detail</li>
          </ol>
        </nav>
        {state.status === "loading" ? (
          <>
            <Skeleton variant="title" />
            <Skeleton variant="text" count={5} />
          </>
        ) : null}
        {state.status === "error" ? (
          <ErrorState
            title="Something went wrong"
            message={state.error.message}
            onRetry={() => window.location.reload()}
          />
        ) : null}
        {state.status === "success" && !state.data ? (
          <EmptyState
            title="Project not found"
            message="This project may be unpublished or the link is incorrect."
          />
        ) : null}
        {state.status === "success" && state.data ? (
          <article className="project-detail">
            <header className="project-detail__header">
              <h1>{state.data.title}</h1>
              <p className="project-detail__lede">{state.data.shortDescription}</p>
              <div className="project-detail__links">
                <a
                  href={state.data.githubUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="btn btn--secondary"
                >
                  GitHub
                  <span className="visually-hidden"> (opens in new tab)</span>
                </a>
                {state.data.demoUrl ? (
                  <a
                    href={state.data.demoUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="btn btn--ghost"
                  >
                    Live demo
                    <span className="visually-hidden"> (opens in new tab)</span>
                  </a>
                ) : null}
              </div>
              <TagList tags={state.data.tags} />
            </header>
            <div className="project-detail__layout">
              <nav className="project-detail__toc" aria-label="On this page">
                <h2 className="project-detail__toc-title">On this page</h2>
                <ul className="project-detail__toc-list">
                  <li>
                    <a href="#problem">Problem</a>
                  </li>
                  <li>
                    <a href="#solution">Solution</a>
                  </li>
                  <li>
                    <a href="#architecture">Architecture</a>
                  </li>
                  <li>
                    <a href="#challenges">Challenges</a>
                  </li>
                  <li>
                    <a href="#stack">Tech stack</a>
                  </li>
                </ul>
              </nav>
              <div className="project-detail__sections">
                <section id="problem" className="project-detail__section" aria-labelledby="h-problem">
                  <h2 id="h-problem">Problem</h2>
                  <p>{state.data.problem}</p>
                </section>
                <section id="solution" className="project-detail__section" aria-labelledby="h-solution">
                  <h2 id="h-solution">Solution</h2>
                  <p>{state.data.solution}</p>
                </section>
                <section
                  id="architecture"
                  className="project-detail__section"
                  aria-labelledby="h-architecture"
                >
                  <h2 id="h-architecture">Architecture</h2>
                  <p>{state.data.architecture}</p>
                </section>
                <section
                  id="challenges"
                  className="project-detail__section"
                  aria-labelledby="h-challenges"
                >
                  <h2 id="h-challenges">Challenges</h2>
                  <p>{state.data.challenges}</p>
                </section>
                <section id="stack" className="project-detail__section" aria-labelledby="h-stack">
                  <h2 id="h-stack">Tech stack</h2>
                  <TagList tags={state.data.techStack} />
                </section>
                {state.data.codeExample ? (
                  <section className="project-detail__section" aria-labelledby="h-code">
                    <h2 id="h-code">Illustrative snippet</h2>
                    <CodeBlock
                      code={state.data.codeExample.code}
                      language={state.data.codeExample.language}
                    />
                  </section>
                ) : null}
              </div>
            </div>
            <footer className="project-detail__footer">
              <SectionHeading id="more-projects" title="Explore more" level={3} />
              <p>
                <Link to="/projects">← Back to all projects</Link>
              </p>
            </footer>
          </article>
        ) : null}
      </main>
    </PageLayout>
  );
}
