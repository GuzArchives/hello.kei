import { defineNuxtConfig } from 'nuxt';
import UnpluginComponentsVite from 'unplugin-vue-components/vite';
import IconsResolver from 'unplugin-icons/resolver';
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	ssr: true,
	modules: [
		'nuxt-windicss',
		'@nuxtjs/color-mode',
		'@vueuse/nuxt',
		'@nuxtjs/supabase',
		'unplugin-icons/nuxt'
	],
	css: [
		'virtual:windi-base.css',
		'virtual:windi-components.css',
		'virtual:windi-utilities.css',
	],
	build: {
		transpile: ['@headlessui/vue']
	},
	vite: {
		plugins: [
			UnpluginComponentsVite({
				dts: true,
				resolvers: [
					IconsResolver({
						prefix: 'Icon',
					}),
				],
			}),
		],
	},
});
