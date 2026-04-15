export type PublishedContent = {
  published: boolean;
};

export type ContactLinks = {
  email: string;
  githubUrl: string;
};

export type SiteMeta = {
  name: string;
  contact: ContactLinks;
};

export type HeroContent = {
  name: string;
  title: string;
  summary: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
};

export type AboutContent = {
  heading: string;
  paragraphs: string[];
};

export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  period: string;
  highlights: string[];
};

export type SkillCategory = {
  category: string;
  items: string[];
};

export type ValuesContent = {
  heading: string;
  items: string[];
};

export type CvContent = {
  hero: HeroContent;
  about: AboutContent;
  experience: ExperienceItem[];
  skills: SkillCategory[];
  values: ValuesContent;
};

export type ProjectSummary = PublishedContent & {
  slug: string;
  title: string;
  shortDescription: string;
  techStack: string[];
  tags: string[];
  thumbnailGradient: string;
};

export type ProjectDetail = ProjectSummary & {
  problem: string;
  solution: string;
  architecture: string;
  challenges: string;
  githubUrl: string;
  demoUrl: string | null;
  codeExample?: { language: string; code: string };
};

export type BlogPostSummary = PublishedContent & {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  tags: string[];
};

export type BlogPostDetail = BlogPostSummary & {
  bodyMarkdown: string;
};
