import { z } from "astro:content";

export const projectSchema = z.object({
  name: z.string(),
  description: z.string(),
  link: z.string().optional(),
  technologies: z.array(z.string()),
});

export type IProject = z.infer<typeof projectSchema>;
