/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js,jsx,ts,tsx,md,mdx}',
    './components/**/*.{html,js,jsx,ts,tsx,md,mdx}',
    "./theme.config.tsx",
 
    // Or if using `src` directory:
    './src/**/*.{js,jsx,ts,tsx,md,mdx}'
  ],
  theme: {
    extend: {}
  },
  plugins: []
}