import type {
  BlogPostDetail,
  CvContent,
  ProjectDetail,
  SiteMeta,
} from "../types/content";

export const mockSiteMeta: SiteMeta = {
  name: "Thu-Phuong NGO",
  contact: {
    email: "thuphuongngo2903@gmail.com",
    githubUrl: "https://github.com",
  },
};

export const mockCv: CvContent = {
  hero: {
    name: mockSiteMeta.name,
    title: "Backend / Fullstack Engineer",
    summary:
      "I enjoy digging beneath the surface of systems, turning complexity into simple, well-designed solutions. Constantly learning and adapting, I'm especially drawn to how AI is reshaping the way we build and think as engineers.",
    ctaPrimary: { label: "View projects", href: "/projects" },
    ctaSecondary: { label: "Read the blog", href: "/blog" },
  },
  about: {
    heading: "About",
    paragraphs: [
      "I'm a software engineer who enjoys building things that are not just functional, but thoughtfully designed and built to last. I like working at the intersection of logic and creativity—where solving a problem isn't just about making it work, but making it make sense.",
      "Lately, I've been especially interested in how AI is influencing the way we design and build software. I don't see it as a shortcut, but as a shift in how we think—one that challenges us to be both more efficient and more intentional.",
      "At the end of the day, I care about building things that make sense, scale well, and feel right—for both users and the people maintaining them."
    ],
  },
  experience: [
    {
      id: "exp-1",
      role: "Software Engineer",
      company: "Capgemini",
      period: "2023 — Present",
      highlights: [
        "Turn product ideas into concrete, working features—from discussion to deployment.",
        "Shape how parts of the system evolve, making them easier to maintain and extend over time.",
        "Improve what's already there by simplifying code, reducing friction, and strengthening reliability",
        "Work closely with different roles to keep delivery smooth, aligned, and continuously improving"
      ],
    },
    {
      id: "exp-2",
      role: "Software Engineer",
      company: "Digital Product Simulation",
      period: "2022 — 2023",
      highlights: [
        "Built Spring Boot services with PostgreSQL, Redis caching, and OpenAPI-first contracts.",
        "Owned CI/CD templates (GitLab) and container images standardized for Kubernetes.",
      ],
    },
  ],
  skills: [
    {
      category: "Backend",
      items: ["Java", "Spring Boot", "REST", "Kafka", "PostgreSQL"],
    },
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Vue.js"],
    },
    {
      category: "DevOps",
      items: ["Docker", "Kubernetes", "GitLab CI", "Observability (metrics & logs)"],
    },
  ],
  values: {
    heading: "How I work",
    items: [
      "I break work into small, reviewable steps so feedback stays fast and the system stays understandable.",
      "I invest in tests where they buy confidence—unit where logic is dense, integration where contracts matter.",
      "I treat pipelines and environments as part of the product: repeatable builds, clear ownership, fewer surprises in prod.",
      "I keep docs and runbooks honest; if they drift from the code, I update them or trim what nobody uses.",
      "I use AI to move faster through exploration and rough drafts, then I still own the design—review, tests, and shipping decisions stay mine.",
    ],
  },
};

export const mockProjects: ProjectDetail[] = [];


export const mockBlogPosts: BlogPostDetail[] = [];
