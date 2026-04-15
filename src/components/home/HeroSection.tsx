import type { HeroContent } from "../../types/content";
import { Button } from "../ui/Button";

type HeroSectionProps = {
  hero: HeroContent;
};

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__grid">
        <div className="hero__content">
          <p className="hero__eyebrow">Software engineer</p>
          <h1 id="hero-heading" className="hero__title">
            {hero.name}
          </h1>
          <p className="hero__subtitle">{hero.title}</p>
          <p className="hero__summary">{hero.summary}</p>
          <div className="hero__actions">
            <Button as="link" to={hero.ctaPrimary.href} variant="primary">
              {hero.ctaPrimary.label}
            </Button>
            <Button as="link" to={hero.ctaSecondary.href} variant="secondary">
              {hero.ctaSecondary.label}
            </Button>
          </div>
        </div>
        <aside className="hero__panel" aria-label="Profile highlight">
          <div className="hero__panel-inner">
            <div className="hero__stat-row">
              <span className="hero__stat-label">Focus</span>
              <span className="hero__stat-value">Backend &amp; platforms</span>
            </div>
            <div className="hero__stat-row">
              <span className="hero__stat-label">Stack</span>
              <span className="hero__stat-value">Java, Spring, Kafka, Vue.js</span>
            </div>
            <div className="hero__stat-row">
              <span className="hero__stat-label">Principles</span>
              <span className="hero__stat-value">Tests, CI/CD, clarity</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
