/**
 * Content abstraction layer — swap implementation for a real API later.
 */
import {
  mockBlogPosts,
  mockCv,
  mockProjects,
  mockSiteMeta,
} from "../data/mockContent";
import type {
  BlogPostDetail,
  BlogPostSummary,
  ContactLinks,
  CvContent,
  ProjectDetail,
  ProjectSummary,
  SiteMeta,
} from "../types/content";

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

const SIMULATED_LATENCY_MS = 280;

function shouldIncludePublished<T extends { published: boolean }>(item: T): boolean {
  return item.published;
}

export async function fetchCv(): Promise<CvContent> {
  await delay(SIMULATED_LATENCY_MS);
  return structuredClone(mockCv);
}

export async function fetchSiteMeta(): Promise<SiteMeta> {
  await delay(SIMULATED_LATENCY_MS);
  return structuredClone(mockSiteMeta);
}

export async function fetchContactLinks(): Promise<ContactLinks> {
  await delay(SIMULATED_LATENCY_MS);
  return structuredClone(mockSiteMeta.contact);
}

export async function fetchProjects(): Promise<ProjectSummary[]> {
  await delay(SIMULATED_LATENCY_MS);
  return mockProjects.filter(shouldIncludePublished).map((p) => ({
    slug: p.slug,
    title: p.title,
    shortDescription: p.shortDescription,
    techStack: p.techStack,
    tags: p.tags,
    thumbnailGradient: p.thumbnailGradient,
    published: p.published,
  }));
}

export async function fetchProjectBySlug(slug: string): Promise<ProjectDetail | null> {
  await delay(SIMULATED_LATENCY_MS);
  const found = mockProjects.find((p) => p.slug === slug && p.published);
  return found ? structuredClone(found) : null;
}

export async function fetchBlogPosts(): Promise<BlogPostSummary[]> {
  await delay(SIMULATED_LATENCY_MS);
  return mockBlogPosts.filter(shouldIncludePublished).map((b) => ({
    slug: b.slug,
    title: b.title,
    summary: b.summary,
    publishedAt: b.publishedAt,
    tags: b.tags,
    published: b.published,
  }));
}

export async function fetchBlogPostBySlug(slug: string): Promise<BlogPostDetail | null> {
  await delay(SIMULATED_LATENCY_MS);
  const found = mockBlogPosts.find((b) => b.slug === slug && b.published);
  return found ? structuredClone(found) : null;
}
