<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import Container from '$lib/Container.svelte';

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

<section bind:this={wrapper} class="relative h-[200vh] bg-neutral-950">
	<div class="sticky top-0 h-screen">
		<Container>
			<div class="flex h-full flex-col justify-center gap-16">
				<h2 class="font-display text-4xl font-medium uppercase md:text-6xl">
					<span class="text-set-gray">About</span> us
				</h2>
				<p class="flex flex-wrap gap-2 text-4xl leading-tight font-semibold md:text-6xl">
					{#each words as w, i}
						<span
							class="transition-colors duration-300"
							class:text-white={i < Math.ceil(progress * words.length)}
							class:text-neutral-800={i >= Math.ceil(progress * words.length)}>{w}</span
						>
					{/each}
				</p>
			</div>
		</Container>
	</div>
</section>
