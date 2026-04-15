import type { AboutContent } from "../../types/content";
import { SectionHeading } from "../ui/SectionHeading";

type AboutSectionProps = {
  about: AboutContent;
};

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <section className="content-section" aria-labelledby="about-heading">
      <SectionHeading id="about-heading" title={about.heading} />
      {about.paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </section>
  );
}
