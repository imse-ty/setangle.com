<script>
	import { fade } from 'svelte/transition';

	import AngleLogo from '$lib/AngleLogo.svelte';
	import Container from '$lib/Container.svelte';
	import Header from '$lib/Header.svelte';
	import CoverVideo from './CoverVideo.svelte';
	import YoutubeEmbed from './YoutubeEmbed.svelte';
	import Icon from '@iconify/svelte';

	let playing = false;
</script>

<div class="relative h-screen overflow-hidden">
	<!-- YOUTUBE OVERLAY -->
	{#if playing}
		<div class="absolute top-0 left-0 z-10 flex h-full w-full flex-col p-80">
			<button
				class="realtive btn z-10 ml-auto btn-square font-mono font-normal uppercase"
				on:click={() => (playing = false)}
				><Icon icon="material-symbols:close" width="18" height="18" /></button
			>
			<YoutubeEmbed url="https://youtu.be/JUP8EUPEpkw" />
		</div>
	{/if}

	<!-- Background cover video -->
	<div class="absolute inset-0 top-0">
		<video autoplay loop muted playsinline poster="" class="m-h-full h-full w-full object-cover">
			<source src="2023-reel.webm" type="video/webm" />
			Your browser does not support the video tag.
		</video>
	</div>

	<!-- Backdrop (same element for dimmer and solid) -->
	{#if !playing}
		<div
			class="absolute inset-0 bg-set-black"
			in:fade={{ duration: 300 }}
			out:fade={{ duration: 300 }}
			style="opacity:0.80"
		></div>
	{:else}
		<div
			class="absolute inset-0 bg-set-black"
			in:fade={{ duration: 300 }}
			out:fade={{ duration: 300 }}
			style="opacity:1"
		></div>
	{/if}

	<!-- HERO -->
	{#if !playing}
		<div class="h-v relative z-20" in:fade={{ duration: 300 }} out:fade={{ duration: 300 }}>
			<Container>
				<div class="flex h-[80vh] flex-col justify-end gap-20">
					<h1 class="font-display text-5xl font-medium tracking-tight lg:text-8xl xl:text-9xl">
						ANGLE is a motion <br />
						<span class="text-set-gray">and</span> experience agency
					</h1>

					<div class="flex flex-col gap-4 md:flex-row md:items-center">
						<div class="flex gap-2">
							<button
								class="btn pl-0 font-mono font-normal uppercase btn-ghost"
								on:click={() => (playing = true)}
							>
								Play reel
							</button>

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
			</Container>
		</div>
	{/if}
</div>
