import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const localeSchema = z.enum(['en', 'fr']);

const role = z.object({
  title: z.string(),
  start: z.string().regex(/^\d{4}-\d{2}$/, 'expected YYYY-MM'),
  end: z
    .string()
    .regex(/^\d{4}-\d{2}$/, 'expected YYYY-MM')
    .optional(),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    company: z.string(),
    location: z.string().optional(),
    url: z.string().url().optional(),
    summary: z.string().optional(),
    highlights: z.array(z.string()).default([]),
    lang: localeSchema,
    order: z.number().int(),
    roles: z.array(role).min(1),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: localeSchema,
    order: z.number().int(),
    category: z.enum(['oss', 'project']).default('project'),
    url: z.string().url().optional(),
    repo: z.string().url().optional(),
    tags: z.array(z.string()).default([]),
    status: z.enum(['live', 'archived']),
  }),
});

const about = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/about' }),
  schema: z.object({
    lang: localeSchema,
  }),
});

export const collections = { experience, projects, about };
