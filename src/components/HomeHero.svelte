<script>
	import { onMount, onDestroy } from 'svelte';
	import Icon from '@iconify/svelte';

	let playing = false;
	let isCoarse = false;
	let hovered = false;

	const DESKTOP_ID = 'JUP8EUPEpkw';
	const MOBILE_ID = 'gvuHj4YtgUw';

	// reactive embed src + key
	$: embedSrc = isCoarse
		? `https://www.youtube.com/embed/${MOBILE_ID}?autoplay=1&controls=1&modestbranding=1&rel=0&playsinline=1&loop=1`
		: `https://www.youtube.com/embed/${DESKTOP_ID}?playlist=${DESKTOP_ID}&autoplay=1&ontrols=1c&modestbranding=1&rel=0&playsinline=1&loop=1`;

	function computePointer() {
		const coarse = window.matchMedia('(any-pointer: coarse)').matches;
		const fine = window.matchMedia('(any-pointer: fine)').matches;
		isCoarse = coarse && !fine;
	}

	onMount(() => {
		computePointer();

		const mqCoarse = window.matchMedia('(any-pointer: coarse)');
		const mqFine = window.matchMedia('(any-pointer: fine)');
		const onChange = () => computePointer();

		mqCoarse.addEventListener?.('change', onChange);
		mqFine.addEventListener?.('change', onChange);

		let t;
		const onResize = () => {
			clearTimeout(t);
			t = setTimeout(computePointer, 150);
		};
		window.addEventListener('resize', onResize, { passive: true });

		onDestroy(() => {
			mqCoarse.removeEventListener?.('change', onChange);
			mqFine.removeEventListener?.('change', onChange);
			window.removeEventListener('resize', onResize);
		});
	});

	function playReel() {
		playing = true;
		document.getElementById('reel')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}
</script>

<!-- Hero -->
<section
	class="flex h-[50vh] w-full flex-col justify-end gap-6 bg-black/95 p-6 md:h-[70vh] md:p-16 xl:px-32.5"
>
	<h1 class="font-display text-3xl font-bold uppercase md:text-8xl lg:text-9xl">
		A motion <span class="text-set-gray">and</span><br /> experience agency
	</h1>
</section>

<!-- Reel -->
<section id="reel" class="relative z-10 h-[50vh] overflow-hidden bg-black md:h-screen">
	{#if !playing}
		<div
			class="group relative h-full w-full select-none"
			on:click={playReel}
			on:mouseenter={() => (hovered = true)}
			on:mouseleave={() => (hovered = false)}
		>
			{#if !isCoarse}
				<!-- Desktop centered button -->
				<div class="absolute top-1/2 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
					<button
						type="button"
						class="flex h-24 w-24 cursor-pointer items-center justify-center rounded-full border border-white/30 bg-white/20 text-white backdrop-blur-md transition hover:bg-white/30 active:scale-95"
					>
						<Icon icon="material-symbols:play-arrow" width="64" />
					</button>
				</div>
			{/if}

			{#if isCoarse}
				<!-- Mobile bottom corners -->
				<div class="absolute inset-x-0 bottom-0 z-30 flex items-end justify-between p-6">
					<p class="font-mono text-sm tracking-wide text-white">Reel</p>
					<button
						type="button"
						on:click|stopPropagation={playReel}
						class="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-white/30 bg-white/20 text-white backdrop-blur-md transition hover:bg-white/30 active:scale-95 md:h-16 md:w-16"
					>
						<Icon icon="material-symbols:play-arrow" width="36" class="md:w-[44px]" />
					</button>
				</div>
			{/if}

			<!-- Hover darken -->
			<div
				class="pointer-events-none absolute inset-0 z-10 bg-black transition-opacity duration-300"
				class:opacity-30={!hovered}
				class:opacity-60={hovered}
			></div>

			<!-- BG video -->
			<video autoplay loop muted playsinline class="h-full w-full cursor-pointer object-cover">
				<source src="2023-reel.webm" type="video/webm" />
			</video>
		</div>
	{:else}
		<!-- Embed; swaps live on resize -->
		<div class="absolute inset-0 h-full w-full">
			{#key embedSrc}
				<iframe
					title="Reel"
					src={embedSrc}
					class="h-full w-full"
					allow="autoplay; fullscreen"
					allowfullscreen
				></iframe>
			{/key}
		</div>
	{/if}
</section>
