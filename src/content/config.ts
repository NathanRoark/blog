import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
})

const books = defineCollection({
  schema: z.object({
    author: z.string(),
    title: z.string(),
    published: z.coerce.date(),
    genres: z.array(z.string()),
    cover_image: z.string(),
  }),
})

export type book = {
  author: string
  title: string
  published: Date
  genres: string[]
  cover_image: URL
}

const albums = defineCollection({
  schema: z.object({
    artist: z.string(),
    album: z.string(),
    release_date: z.coerce.date(),
    post_date: z.coerce.date(),
    cover_art_url: z.string(),
    genres: z.array(z.string()),
  }),
})

export type album = {
  artist: string
  album: string
  release_date: Date
  post_date: Date
  cover_art_url: URL
  genres: string[]
}

export const collections = { blog, albums, books }
