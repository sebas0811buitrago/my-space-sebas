import { defineCollection, z } from "astro:content"

const cardPost = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		company: z.object({
			name: z.string(),
			url: z.string().optional(),
		}),
		startDate: z.date(),
		endDate: z.union([z.date(), z.literal("present")]),

		technologies: z.array(z.string()),
	}),
})

export const collections = {
	experience: cardPost,
	education: cardPost,
}
