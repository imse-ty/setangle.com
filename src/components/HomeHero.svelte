<script>
	import { spring } from 'svelte/motion';
	import { fade, scale } from 'svelte/transition';
	import Icon from '@iconify/svelte';

	let playing = $state(false);
	let isCoarse = $state(false);
	let hovered = $state(false);

	const DESKTOP_ID = 'JUP8EUPEpkw';
	const MOBILE_ID = 'gvuHj4YtgUw';

	let embedSrc = $derived.by(() => {
		const id = isCoarse ? MOBILE_ID : DESKTOP_ID;
		return `https://www.youtube.com/embed/${id}?playlist=${id}&autoplay=1&controls=1&modestbranding=1&rel=0&playsinline=1&loop=1`;
	});

	// Reactive spring for cursor movement
	const mouseX = spring(0, { stiffness: 0.1, damping: 0.75 });
	const mouseY = spring(0, { stiffness: 0.1, damping: 0.75 });

	function computePointer() {
		const coarse = window.matchMedia('(any-pointer: coarse)').matches;
		const fine = window.matchMedia('(any-pointer: fine)').matches;
		isCoarse = coarse && !fine;
	}

	$effect(() => {
		computePointer();

		const mqCoarse = window.matchMedia('(any-pointer: coarse)');
		const mqFine = window.matchMedia('(any-pointer: fine)');
		const onChange = () => computePointer();

		mqCoarse.addEventListener('change', onChange);
		mqFine.addEventListener('change', onChange);
		window.addEventListener('resize', computePointer, { passive: true });

		return () => {
			mqCoarse.removeEventListener('change', onChange);
			mqFine.removeEventListener('change', onChange);
			window.removeEventListener('resize', computePointer);
		};
	});

	function playReel() {
		playing = true;
		document.getElementById('reel')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	function trackCursor(event) {
		mouseX.set(event.clientX);
		mouseY.set(event.clientY);
	}
</script>

<!-- Hero -->
<section
	class="flex h-[50vh] w-full flex-col justify-end gap-6 bg-black/95 px-6 pt-48 pb-16 sm:h-auto md:px-16 xl:px-32.5"
>
	<h1 class="font-display text-5xl font-bold uppercase sm:text-8xl xl:text-[10rem]">
		A motion <span class="text-set-gray">and</span><br /> experience agency
	</h1>
</section>

<!-- Reel -->
<section
	id="reel"
	class="relative z-10 h-[50vh] overflow-hidden bg-black md:h-screen"
	on:mousemove={!isCoarse && !playing ? trackCursor : null}
>
	{#if !playing}
		<div
			class="group relative h-full w-full select-none"
			on:click={playReel}
			on:mouseenter={() => (hovered = true)}
			on:mouseleave={() => (hovered = false)}
		>
			{#if !isCoarse}
				<!-- Animated Play Cursor with spring and transition -->
				{#if hovered}
					<div
						in:scale={{ duration: 150 }}
						out:fade={{ duration: 150 }}
						class="pointer-events-none fixed z-30 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white backdrop-blur-md"
						style="left: {$mouseX}px; top: {$mouseY}px;"
					>
						<Icon icon="material-symbols:play-arrow" width="64" />
					</div>
				{/if}
			{/if}

			{#if isCoarse}
				<!-- Mobile UI -->
				<div class="absolute inset-x-0 bottom-0 z-30 flex items-end justify-between p-6">
					<p class="font-mono text-sm tracking-wide text-white">Reel</p>
					<button
						type="button"
						on:click|stopPropagation={playReel}
						class="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white backdrop-blur-md transition hover:bg-white/30 active:scale-95 md:h-16 md:w-16"
					>
						<Icon icon="material-symbols:play-arrow" width="36" class="md:w-[44px]" />
					</button>
				</div>
			{/if}

			<!-- Hover darken effect -->
			<div
				class="pointer-events-none absolute inset-0 z-10 bg-black transition-opacity duration-300"
				class:opacity-30={!hovered}
				class:opacity-60={hovered}
			></div>

			<!-- Background video -->
			<video autoplay loop muted playsinline class="h-full w-full cursor-pointer object-cover">
				<source src="2023-reel.webm" type="video/webm" />
			</video>
		</div>
	{:else}
		<!-- YouTube embed -->
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
