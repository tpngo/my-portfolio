import type { ExperienceItem } from "../../types/content";
import { SectionHeading } from "../ui/SectionHeading";

type ExperienceTimelineProps = {
  items: ExperienceItem[];
};

export function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  return (
    <section className="content-section" aria-labelledby="experience-heading">
      <SectionHeading
        id="experience-heading"
        title="Experience"
        description="Recent roles and outcomes — details available on request."
      />
      <ol className="timeline">
        {items.map((item) => (
          <li key={item.id} className="timeline__item">
            <div className="timeline__marker" aria-hidden="true" />
            <div className="timeline__body">
              <h3 className="timeline__role">{item.role}</h3>
              <p className="timeline__meta">
                <span className="timeline__company">{item.company}</span>
                <span className="timeline__period">{item.period}</span>
              </p>
              <ul className="timeline__highlights">
                {item.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
