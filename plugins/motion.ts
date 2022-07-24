import { MotionOnePlugin } from 'vue-motion-one';

export default defineNuxtPlugin(Nuxt => {
	Nuxt.vueApp.use(MotionOnePlugin);
})

