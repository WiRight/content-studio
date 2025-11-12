import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: {
        include: "**",
        exclude: ["index.md"],
      },
      schema: z.object({
        // cover: z.string(),
        homeImage: z.string(),
        draft: z.boolean().default(false),
      }),
    }),
  },
});
