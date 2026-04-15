type SectionHeadingProps = {
  id: string;
  title: string;
  description?: string;
  level?: 2 | 3;
};

export function SectionHeading({ id, title, description, level = 2 }: SectionHeadingProps) {
  const H = level === 2 ? "h2" : "h3";
  return (
    <header className="section-heading">
      <H id={id} className="section-heading__title">
        {title}
      </H>
      {description ? <p className="section-heading__desc">{description}</p> : null}
    </header>
  );
}
