import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    plain: z.string(),
    tagline: z.string(),
    date: z.string(),
    order: z.number(),
    metrics: z.array(z.object({ value: z.string(), label: z.string() })),
    stack: z.array(z.string()),
    links: z.array(z.object({ label: z.string(), href: z.string() })),
  }),
});

export const collections = { work };
