<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import Container from '$lib/Container.svelte';
	import ContactItem from '$lib/ContactItem.svelte';
	import ServiceItem from './ServiceItem.svelte';

	const words =
		`We help brands shine by creating soulful animated visuals for marketing campaigns and events.`.split(
			' '
		);

	let wrapper;
	let start = 0,
		end = 1;
	let progress = 0;
	let mounted = false;

	const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

	function computeBounds() {
		if (!mounted || !wrapper) return;
		const rect = wrapper.getBoundingClientRect();
		const y = window.scrollY || document.documentElement.scrollTop || 0;
		const vp = Math.max(window.innerHeight || 0, 1);
		start = y + rect.top;
		end = start + vp;
		update();
	}

	function update() {
		if (!mounted) return;
		const y = window.scrollY || document.documentElement.scrollTop || 0;
		const denom = Math.max(end - start, 1);
		progress = clamp((y - start) / denom, 0, 1);
	}

	onMount(() => {
		if (!browser) return;
		mounted = true;
		requestAnimationFrame(() => {
			computeBounds();
			update();
		});
	});
</script>

<!-- MUST be top-level -->
<svelte:window
	on:scroll={() => mounted && requestAnimationFrame(update)}
	on:resize={() => mounted && computeBounds()}
/>

<section
	id="services"
	bind:this={wrapper}
	class="relative min-h-screen bg-neutral-950 py-16 md:py-32"
>
	<Container>
		<div class="flex h-full flex-col justify-center gap-8 sm:gap-16">
			<h2 class="font-display text-4xl font-medium uppercase md:text-6xl">
				<span class="text-set-gray">Our</span> Services
			</h2>
			<p class="flex flex-wrap gap-2 text-4xl leading-tight font-semibold">
				We help brands shine by creating soulful animated visuals for marketing campaigns and
				events.
			</p>

			<ul class="mt-16 flex flex-col gap-8">
				<ServiceItem>Event graphics</ServiceItem>
				<ServiceItem>Brand videos</ServiceItem>
				<ServiceItem>Broadcast graphics</ServiceItem>
				<ServiceItem>Pitch decks</ServiceItem>
				<ServiceItem>Explainer videos</ServiceItem>
				<ServiceItem>3D visuals</ServiceItem>
				<ServiceItem>Sizzle reels</ServiceItem>
			</ul>
		</div>
	</Container>
</section>
