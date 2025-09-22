<script>
	import AngleLogo from '$lib/AngleLogo.svelte';
	import Container from '$lib/Container.svelte';
	import Header from '$lib/Header.svelte';
	import CoverVideo from './CoverVideo.svelte';
	import YoutubeEmbed from './YoutubeEmbed.svelte';
</script>

<!-- Active YouTube video -->
<div class="relative h-screen">
	<div class="absolute top-0 left-0 z-10 flex h-full w-full flex-col p-10">
		<button
			class="realtive btn z-10 ml-auto font-mono font-normal uppercase"
			on:click={() => console.log('Clicked')}>Close</button
		>
		<YoutubeEmbed url="https://youtu.be/JUP8EUPEpkw" />
	</div>

	<!-- Cover background video -->
	<div class="absolute z-10 h-full w-full bg-set-black/98"></div>
	<div class="absolute top-0 left-0 h-full w-full">
		<CoverVideo src="2023-reel.webm" />
	</div>

	<!-- Hero content -->
	<Container>
		<div class="relative z-20 flex h-full flex-col justify-between">
			<div class="absolute top-0 left-0 z-30 h-full w-full"></div>
			<Header />
			<AngleLogo />
			<div class="flex flex-col gap-8">
				<h1 class="s font-display text-5xl font-medium tracking-tight lg:text-8xl xl:text-9xl">
					ANGLE is a motion <br /> <span class="text-set-gray">and</span> experience agency
				</h1>
				<div class="flex flex-col gap-4 md:flex-row md:items-center">
					<div class="flex">
						<button class="btn pl-0 font-mono font-normal uppercase btn-ghost">Play reel</button>
						<a
							href="https://cal.com/team/setangle/discuss"
							target="_blank"
							rel="noopener noreferrer"
						>
							<button class="btn font-mono font-normal uppercase btn-ghost">Book a call</button>
						</a>
					</div>

					<div class="h-px flex-1 bg-set-gray"></div>

					<div class="font-mono uppercase">Atlanta,&nbsp;GA</div>
				</div>
			</div>
		</div>
	</Container>
</div>
