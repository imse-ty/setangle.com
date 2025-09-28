<script>
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import Icon from '@iconify/svelte';

	let playing = false;
	let cursorVisible = false;
	let isCoarse = false; // touch detection

	onMount(() => {
		isCoarse = window.matchMedia('(pointer: coarse)').matches;
	});

	const x = tweened(0, { duration: 120, easing: cubicOut });
	const y = tweened(0, { duration: 120, easing: cubicOut });
	const scale = tweened(0.6, { duration: 160, easing: cubicOut });
	const opacity = tweened(0, { duration: 120, easing: cubicOut });

	function onMouseMove(e) {
		x.set(e.clientX);
		y.set(e.clientY);
	}
	function onMouseEnter() {
		cursorVisible = true;
		opacity.set(1);
		scale.set(1);
	}
	function onMouseLeave() {
		cursorVisible = false;
		opacity.set(0);
		scale.set(0.6);
	}

	function heroOffsetPx() {
		// 50vh on mobile, 70vh on md+ (matches your Tailwind classes)
		const isMdUp = typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches;
		const vh = isMdUp ? 0.7 : 0.5;
		return Math.round(window.innerHeight * vh);
	}

	function playReel() {
		playing = true;
		if (typeof window !== 'undefined') {
			window.scrollTo({ top: heroOffsetPx(), behavior: 'smooth' });
		}
	}
</script>

<div class="relative h-[200vh]">
	<!-- Hero -->
	<div
		class="absolute top-0 z-20 flex h-[50vh] w-full flex-col justify-end gap-6 bg-black/95 p-6 md:h-[70vh] md:p-16 xl:px-32.5"
	>
		<h1 class="font-display text-3xl font-bold uppercase md:text-8xl lg:text-9xl">
			A motion <span class="text-set-gray">and</span><br /> experience agency
		</h1>
	</div>

	<!-- Reel -->
	<div id="reel" class="sticky top-0 z-10 h-screen overflow-hidden">
		{#if !playing}
			<div
				class="relative h-full w-full select-none"
				on:mousemove={!isCoarse ? onMouseMove : null}
				on:mouseenter={!isCoarse ? onMouseEnter : null}
				on:mouseleave={!isCoarse ? onMouseLeave : null}
				on:click={playReel}
				on:touchstart|passive={() => isCoarse && playReel()}
			>
				<!-- Desktop: blurred cursor-follow play -->
				{#if cursorVisible && !isCoarse}
					<div
						class="pointer-events-none fixed z-30 flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white backdrop-blur-md md:h-24 md:w-24"
						style="transform: translate(calc({$x}px - 50%), calc({$y}px - 50%)) scale({$scale}); opacity: {$opacity}; transition: opacity 0.15s linear;"
					>
						<Icon icon="material-symbols:play-arrow" width="56" class="md:w-[64px]" />
					</div>
				{/if}

				<!-- Mobile: static UI bottom corners -->
				{#if isCoarse}
					<div class="absolute inset-x-0 bottom-0 z-30 flex items-end justify-between p-6">
						<p class="font-mono text-sm tracking-wide text-white">Reel</p>
						<button
							type="button"
							aria-label="Play reel"
							class="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white backdrop-blur-md transition active:scale-95 md:h-16 md:w-16"
						>
							<Icon icon="material-symbols:play-arrow" width="36" class="md:w-[44px]" />
						</button>
					</div>
				{/if}

				<!-- Dimmer -->
				<div class="absolute inset-0 z-10 bg-black/30"></div>

				<!-- Background video -->
				<video
					autoplay
					loop
					muted
					playsinline
					class="h-full w-full object-cover {isCoarse ? '' : 'cursor-none'}"
				>
					<source src="2023-reel.webm" type="video/webm" />
					Your browser does not support the video tag.
				</video>
			</div>
		{:else}
			<!-- YouTube embed -->
			<div class="absolute inset-0 h-full w-full">
				<iframe
					title="Reel"
					src="https://www.youtube.com/embed/JUP8EUPEpkw?playlist=JUP8EUPEpkw&autoplay=1&controls=1&modestbranding=1&rel=0&playsinline=1&loop=1"
					class="h-full w-full"
					allow="autoplay; fullscreen"
					allowfullscreen
				></iframe>
			</div>
		{/if}
	</div>
</div>
