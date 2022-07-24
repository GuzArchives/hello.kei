<template>
	<NuxtLayout>
		<main
			class="bg-light-100 flex justify-center items-center w-screen h-screen overflow-hidden"
		>
			<div
				v-animate
				:keyframes="{ y: [0, -20, 0] }"
				:options="{
					repeat: Infinity,
					duration: 5,
					easing: ['ease-in-out', 'ease-in-out'],
				}"
				class="font-bold font-mono text-center text-dark-900"
			>
				<IconMdi:heart
					class="h-20 w-20 fill-dark-900"
					v-animate
					:keyframes="{ scaleX: [1, -1, 1], y: [0, -10, 0] }"
					:options="{
						repeat: Infinity,
						duration: 5,
						easing: ['ease-in-out', 'ease-in-out'],
					}"
				/>
				<p>Hello, Kei</p>
			</div>
		</main>
	</NuxtLayout>
</template>
