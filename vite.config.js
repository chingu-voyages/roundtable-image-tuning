
import tailwindcss from 'tailwindcss'
import { defineConfig } from 'vitest/config'

export default defineConfig({
	plugins: [tailwindcss],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	css: {
		postcss: {
			plugins: [tailwindcss],
		},
	}
})
