export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Nathan's Blog",
  url: "https://nathanroark.com",
  ogImage: "https://nathanroark.com/og.jpg",
  description:
    "A blog where I post about music, books, movies, and other things I like.",
  navLinks: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Music",
      href: "/music",
    },
    {
      title: "Books",
      href: "/books",
    },
    {
      title: "Movies",
      href: "/movies",
    },
    {
      title: "About",
      href: "/about",
    },
  ],
  links: {
    twitter: "https://twitter.com/nathanroark",
    github: "https://github.com/nathanroark",
    linkedin: "https://linkedin.com/in/nathan-roark/",
    youtube: "https://youtube.com/@nathanroark",
  },
};
