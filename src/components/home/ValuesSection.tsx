import type { ValuesContent } from "../../types/content";
import { SectionHeading } from "../ui/SectionHeading";

type ValuesSectionProps = {
  values: ValuesContent;
};

export function ValuesSection({ values }: ValuesSectionProps) {
  return (
    <section className="content-section content-section--subtle" aria-labelledby="values-heading">
      <SectionHeading id="values-heading" title={values.heading} />
      <ul className="values-list">
        {values.items.map((v) => (
          <li key={v} className="values-list__item">
            {v}
          </li>
        ))}
      </ul>
    </section>
  );
}
