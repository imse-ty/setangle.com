<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { isPreviewing, VisualEditing } from '@sanity/visual-editing/svelte';
	import LiveMode from '../components/LiveMode.svelte';
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

	<script
		defer
		src="https://cloud.umami.is/script.js"
		data-website-id="d640d7bc-05df-4e47-9c61-5f1816a2f9a7"
	></script>
</svelte:head>

<div class="relative bg-black font-body text-white">
	<Header />
	<main class="relative z-10 flex min-h-screen flex-col bg-black">
		<slot />
	</main>
	<Footer />
</div>

{#if $isPreviewing}
	<VisualEditing />
	<LiveMode />
{/if}
