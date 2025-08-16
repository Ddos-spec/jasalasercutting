import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(), // This will be the excerpt
    pubDate: z.date(), // Renamed from publishDate for Astro convention
    category: z.string(),
    tags: z.array(z.string()),
    image: z.string(),
    readTime: z.string(),
    author: z.string(),
    draft: z.boolean().default(false)
  })
});

export const collections = {
  blog: blogCollection
};