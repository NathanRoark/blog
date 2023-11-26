import { defineCollection, z } from 'astro:content'

const books = defineCollection({
  schema: z.object({
    author: z.string(),
    title: z.string(),
    published: z.coerce.date(),
    genres: z.array(z.string()),
    cover_image: z.string(),
    read: z.string(),
  }),
})

export type book = {
  author: string
  title: string
  published: Date
  genres: string[]
  cover_image: URL
  read: string
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

// const animeMovies = defineCollection({
//   schema: z.object({
//     title: z.string(),
//     release_date: z.coerce.date(),
//     art: z.string(),
//     genres: z.array(z.string()),
//   }),
// })
//
// export type animeMovie = {
//   title: string
//   release_date: Date
//   art: URL
//   genres: string[]
// }
//
// const animeSeries = defineCollection({
//   schema: z.object({
//     title: z.string(),
//     start_date: z.coerce.date(),
//     end_date: z.coerce.date(),
//     art: z.string(),
//     genres: z.array(z.string()),
//   }),
// })
//
// export type animeSeries = {
//   title: string
//   start_date: Date
//   end_date: Date
//   art: URL
//   genres: string[]
// }

const anime = defineCollection({
  schema: z.object({
    title: z.string(),
    releaseDate: z.coerce.date().optional(),
    startDate: z.coerce.date().optional(),
    endDate: z.coerce.date().optional(),
    art: z.string(),
    genre: z.array(z.string()),
    studio: z.string(),
  }),
})

export type anime = {
  title: string
  releaseDate: Date | undefined
  startDate: Date | undefined
  endDate: Date | undefined
  art: URL
  genre: string[]
  studio: string
}

export const collections = { albums, books, anime }
