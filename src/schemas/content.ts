import { z } from "astro:content";

export const projectSchema = z.object({
  name: z.string(),
  description: z.string(),
  link: z.string().optional(),
  technologies: z.array(z.string()),
  discontinued: z.boolean().default(false),
});

export const blogPostSchema = z.object({
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()).default([]),
  author: z.string(),
});

export type IProject = z.infer<typeof projectSchema>;
export type IBlogPost = z.infer<typeof blogPostSchema>;
