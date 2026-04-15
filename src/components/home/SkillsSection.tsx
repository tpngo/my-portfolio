import type { SkillCategory } from "../../types/content";
import { SectionHeading } from "../ui/SectionHeading";
import { TagList } from "../ui/TagList";

type SkillsSectionProps = {
  skills: SkillCategory[];
};

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section className="content-section" aria-labelledby="skills-heading">
      <SectionHeading
        id="skills-heading"
        title="Skills"
        description="Representative stack — tools vary by team and product constraints."
      />
      <ul className="skill-grid">
        {skills.map((cat) => (
          <li key={cat.category} className="skill-grid__item">
            <h3 className="skill-grid__label">{cat.category}</h3>
            <TagList tags={cat.items} />
          </li>
        ))}
      </ul>
    </section>
  );
}
