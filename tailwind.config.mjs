/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		colors: {
		  'yellow': '#FFFF99', // Aquí defines un color amarillo claro
		},
	  },
	},
	plugins: [],
  }
  