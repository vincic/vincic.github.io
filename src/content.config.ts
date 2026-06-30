import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts', retainBody: true }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional().default(''),
    pubDate: z.coerce.date().optional(),
    date: z.coerce.date().optional(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().optional().default('sasha'),
    heroImage: z.string().optional(),
    image: z.any().optional(),
    tags: z.array(z.string()).optional().default([]),
    categories: z.array(z.string()).optional().default([]),
    draft: z.boolean().optional().default(false),
  }).passthrough(),
});

const authors = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/authors' }),
  schema: z.object({
    name: z.string(),
    role: z.string().optional(),
    bio: z.string().optional(),
    socials: z.object({
      website: z.string().optional(),
      linkedin: z.string().optional(),
      email: z.string().optional(),
      github: z.string().optional(),
    }).optional(),
  }).passthrough(),
});

export const collections = { posts, authors };
