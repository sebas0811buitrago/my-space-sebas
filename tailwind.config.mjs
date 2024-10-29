/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		colors: {
			"primary": "hsl(var(--primary))",
			"accent": "hsl(var(--accent))",
			"neutral-primary": "hsl(var(--neutral-primary))",
			"neutral-secondary": "hsl(var(--neutral-secondary))",
			"background": "hsl(var(--background))",
			"background-secondary": "hsl(var(--background-secondary))",
		},
	},

	plugins: [],
}
