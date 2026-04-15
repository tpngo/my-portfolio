import { PageLayout } from "../components/layout/PageLayout";
import { ProjectCard } from "../components/projects/ProjectCard";
import { SectionHeading } from "../components/ui/SectionHeading";
import { EmptyState } from "../components/ui/EmptyState";
import { ErrorState } from "../components/ui/ErrorState";
import { Skeleton } from "../components/ui/Skeleton";
import { useAsyncData } from "../hooks/useAsyncData";
import { fetchProjects } from "../services/contentService";

export function ProjectsPage() {
  const state = useAsyncData("projects", fetchProjects);

  return (
    <PageLayout>
      <main id="main-content" className="page-main" tabIndex={-1}>
        <SectionHeading
          id="projects-heading"
          title="Projects"
          description="Personal projects where I turn ideas into working products and iterate based on what I learn."
        />
        {state.status === "loading" ? (
          <div className="project-grid" aria-hidden="true">
            <Skeleton variant="card" count={3} />
          </div>
        ) : null}
        {state.status === "error" ? (
          <ErrorState
            title="Failed to load projects"
            message={state.error.message}
            onRetry={() => window.location.reload()}
          />
        ) : null}
        {state.status === "success" && state.data.length === 0 ? (
          <EmptyState title="No projects available" message="Published projects will appear here." />
        ) : null}
        {state.status === "success" && state.data.length > 0 ? (
          <div className="project-grid" role="list">
            {state.data.map((p) => (
              <div key={p.slug} className="project-grid__cell" role="listitem">
                <ProjectCard project={p} />
              </div>
            ))}
          </div>
        ) : null}
      </main>
    </PageLayout>
  );
}
