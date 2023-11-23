import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
})

const albums = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		artist: z.string(),
		album: z.string(),
		// Transform string to Date object
		release_date: z.coerce.date(),
		post_date: z.coerce.date(),
		cover_art_url: z.string(),
		genres: z.array(z.string()),
	}),
})

export const collections = { blog, albums }
