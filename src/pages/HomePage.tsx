import { AboutSection } from "../components/home/AboutSection";
import { ExperienceTimeline } from "../components/home/ExperienceTimeline";
import { HeroSection } from "../components/home/HeroSection";
import { SkillsSection } from "../components/home/SkillsSection";
import { ValuesSection } from "../components/home/ValuesSection";
import { PageLayout } from "../components/layout/PageLayout";
import { ErrorState } from "../components/ui/ErrorState";
import { Skeleton } from "../components/ui/Skeleton";
import { useAsyncData } from "../hooks/useAsyncData";
import { fetchCv } from "../services/contentService";

export function HomePage() {
  const state = useAsyncData("cv", fetchCv);

  return (
    <PageLayout>
      <main id="main-content" className="page-main" tabIndex={-1}>
        {state.status === "loading" ? (
          <>
            <Skeleton variant="title" />
            <Skeleton variant="text" count={4} />
            <Skeleton variant="card" count={2} />
          </>
        ) : null}
        {state.status === "error" ? (
          <ErrorState
            title="Could not load profile"
            message={state.error.message}
            onRetry={() => window.location.reload()}
          />
        ) : null}
        {state.status === "success" && state.data ? (
          <>
            <HeroSection hero={state.data.hero} />
            <AboutSection about={state.data.about} />
            <ExperienceTimeline items={state.data.experience} />
            <SkillsSection skills={state.data.skills} />
            <ValuesSection values={state.data.values} />
          </>
        ) : null}
      </main>
    </PageLayout>
  );
}
