/** @type {import('prettier').Config} */
export default {
  printWidth: 100,
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  endOfLine: 'lf',
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
}
