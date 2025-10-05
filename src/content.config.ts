import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { projectSchema } from "./schemas/project";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/projects" }),
  schema: projectSchema,
});

export const collections = { projects };
