import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    coverImage: z.string(),
    videoUrl: z.string(),
    tags: z.array(z.string()),
    date: z.date(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    coverImage: z.string().optional(),
    tags: z.array(z.string()),
    date: z.date(),
    author: z.string().default('Kristy Wong'),
  }),
});

export const collections = {
  projects: projectsCollection,
  blog: blogCollection,
};
