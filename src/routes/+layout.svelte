<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { isPreviewing, VisualEditing } from '@sanity/visual-editing/svelte';
	import { page } from '$app/stores';
	import LiveMode from '../components/LiveMode.svelte';
	import Container from '$lib/Container.svelte';
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import { onMount } from 'svelte';
	import { afterNavigate, beforeNavigate } from '$app/navigation';

	let root;

	onMount(() => {
		root = document.getElementsByTagName('html')[0];

		root?.classList.add('smoothscroll');
	});

	beforeNavigate(() => {
		root?.classList.remove('smoothscroll');
	});

	afterNavigate(() => {
		root?.classList.add('smoothscroll');
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{#if $isPreviewing}
	<div class="sticky top-0 z-50 bg-set-purple py-0.5 text-set-white">
		<Container>
			<div class="flex w-full items-center justify-between">
				<span class="font-mono text-sm"> You are currently in preview mode </span>
				<a href={`/preview/disable?redirect=${$page.url.pathname}`}>
					<button class="btn cursor-pointer font-mono font-normal uppercase btn-outline btn-xs">
						Disable preview mode
					</button>
				</a>
			</div>
		</Container>
	</div>
{/if}

<div class="realative bg-set-black font-body text-set-white">
	<Header />
	<main class="flex flex-col">
		<slot />
	</main>
	<Footer />
</div>

{#if $isPreviewing}
	<VisualEditing />
	<LiveMode />
{/if}
