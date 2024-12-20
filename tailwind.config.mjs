/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		colors: {
		  'yellow': '#FFFF99', // Aquí defines un color amarillo claro
		  'purple': '#9A6EBB',
		  'green': '#34D399',
		  'red': '#E40039',
		  'black':'#172554'
		},
	  },
	},
	plugins: [],
  }
  