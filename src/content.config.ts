import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import { projectSchema } from "./schemas/content";

// const projects = defineCollection({
//   loader: glob({ pattern: "**/*.md", base: "./src/data/projects" }),
//   schema: projectSchema,
// });

const projectsJson = defineCollection({
  loader: file("src/data/projects/data.json", {
    parser: (data) => {
      const arrayData = JSON.parse(data) as any[];
      return arrayData?.map((item, index) => {
        return {
          id: index,
          ...item,
        };
      });
    },
  }),
  schema: projectSchema,
});

// const blog = defineCollection({
//   loader: glob({ pattern: "**/*.md", base: "./src/data/blog" }),
//   schema: projectSchema,
// });

export const collections = { projects: projectsJson };
