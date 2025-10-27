import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { projectSchema } from "./schemas/content";

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

export const collections = { projects: projectsJson };
