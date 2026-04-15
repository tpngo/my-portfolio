import { Link } from "react-router-dom";
import type { ProjectSummary } from "../../types/content";
import { Card } from "../ui/Card";
import { TagList } from "../ui/TagList";

type ProjectCardProps = {
  project: ProjectSummary;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card as="article" className="project-card">
      <Link to={`/projects/${project.slug}`} className="project-card__link">
        <div
          className="project-card__thumb"
          style={{ background: project.thumbnailGradient }}
          aria-hidden="true"
        />
        <div className="project-card__body">
          <h2 className="project-card__title">{project.title}</h2>
          <p className="project-card__desc">{project.shortDescription}</p>
          <p className="project-card__stack">{project.techStack.join(" · ")}</p>
          <TagList tags={project.tags} />
          <span className="project-card__cta">View case study</span>
        </div>
      </Link>
    </Card>
  );
}
