<script>
	import Container from '$lib/Container.svelte';
	import Chickfila from './logos/Chickfila.svelte';
	import Ford from './logos/Ford.svelte';
	import Google from './logos/Google.svelte';
	import KaiserPermanente from './logos/KaiserPermanente.svelte';
	import Maxon from './logos/Maxon.svelte';
	import Vmware from './logos/Vmware.svelte';

	// Accept logos as a snippet prop
	let { speed = 40 } = $props();

	const logos = [Ford, Google, Maxon, Chickfila, KaiserPermanente, Vmware];
</script>

<section class="bg-background relative hidden w-full overflow-hidden pt-16 sm:block">
	<div
		class="animate-scroll flex items-center justify-between gap-8 fill-set-gray md:gap-24"
		style="animation-duration: {speed}s;"
	>
		{#each Array(2) as _}
			{#each logos as Logo}
				<div class="transition duration-500 hover:fill-set-white"><Logo /></div>
			{/each}
		{/each}
	</div>
</section>

<style>
	/* Added Tailwind-compatible animation keyframes */
	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}

	/* Ensure logos maintain their size */
	:global(.animate-scroll svg) {
		height: 2.5rem;
		width: auto;
		flex-shrink: 0;
	}
</style>
