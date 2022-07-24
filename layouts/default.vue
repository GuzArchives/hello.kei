<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
import { useAnimations } from 'vue-motion-one';

const animations = useAnimations();
</script>

<template>
	<slot />
	<footer class="fixed left-0 bottom-0 z-10 w-screen">
		<Menu as="nav" class="p-2 relative inline-block text-left">
			<transition
				enter-active-class="transition duration-100 ease-out"
				enter-from-class="transform scale-y-95 opacity-0 translate-y-3"
				enter-to-class="transform scale-y-100 opacity-100 translate-y-0"
				leave-active-class="transition duration-75 ease-out"
				leave-from-class="transform scale-y-100 opacity-100 translate-y-0"
				leave-to-class="transform scale-y-95 opacity-0 translate-y-3"
			>
				<MenuItems class="left-0 mb-2 w-56 bg-light-700 p-2 rounded-md">
					<MenuItem v-slot="{ active }">
						<a :class="{ 'bg-blue-500': active }"> Account settings </a>
					</MenuItem>
					<MenuItem v-slot="{ active }">
						<a :class="{ 'bg-blue-500': active }"> Documentation </a>
					</MenuItem>
					<MenuItem disabled>
						<span class="opacity-75">Invite a friend (coming soon!)</span>
					</MenuItem>
				</MenuItems>
			</transition>
			<MenuButton
				@click="
					() => {
						animations.label.reverse();
						animations.button.reverse();
						animations.icon.reverse();
					}
				"
				class="bg-light-500 p-1 rounded-md min-w-7 h-7 fill-dark-900 flex items-center"
				v-animate="'button'"
				:keyframes="{
					width: ['4rem', '1.75rem'],
				}"
				:options="{ duration: 0.6 }"
			>
				<IconMdi:menu
					v-animate="'icon'"
					:keyframes="{
						transform: ['translateX(0px)', 'translateX(2px)'],
					}"
				/>
				<p
					v-animate="'label'"
					:keyframes="{
						transform: [
							'translateX(15px) scaleX(1)',
							'translateX(-10px) scaleX(0)',
						],
						opacity: [100, 0, 0],
					}"
					:options="{ duration: 0.6 }"
					class="px-1 fixed"
				>
					Menu
				</p>
			</MenuButton>
		</Menu>
	</footer>
</template>
