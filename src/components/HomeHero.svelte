<script>
	import Icon from '@iconify/svelte';
	import LogoCarousel from './LogoCarousel.svelte';

	let playing = false;
</script>

<div class="relative h-[200vh]">
	<!-- Hero -->
	<div
		class="absolute top-0 z-20 flex h-[50vh] w-full flex-col justify-end gap-8 bg-black/95 p-8 md:h-[70vh] md:p-16 xl:px-32.5"
	>
		<h1 class="font-display text-4xl font-bold uppercase md:text-8xl">
			A motion
			<span class="text-set-gray">and</span><br /> experience agency
		</h1>
	</div>

	<!-- Reel -->
	<div class="sticky top-0 z-10 h-screen overflow-hidden">
		<!-- <div class="absolute bottom-0 z-30 hidden w-full p-8 md:block md:p-16 xl:px-32.5">
			<LogoCarousel />
		</div> -->

		<div
			class="absolute bottom-0 left-0 z-20 flex w-full items-center justify-between p-4 md:hidden"
		>
			<p class="font-mono">Reel</p>
			<button class="btn btn-square btn-lg">
				<Icon icon="material-symbols:play-arrow" width="24" />
			</button>
		</div>

		<div class="absolute top-0 left-0 z-10 h-full w-full bg-black opacity-30"></div>

		<video autoplay loop muted playsinline poster="" class="h-full w-full object-cover">
			<source src="2023-reel.webm" type="video/webm" />
			Your browser does not support the video tag.
		</video>
	</div>
</div>
