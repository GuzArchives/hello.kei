import { defineConfig } from 'windicss/helpers';

export default defineConfig({
	extract: {
		include: ['src/**/*.{jsx,tsx,css}'],
	},
});

