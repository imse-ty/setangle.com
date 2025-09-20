<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { isPreviewing, VisualEditing } from '@sanity/visual-editing/svelte';
	import { page } from '$app/stores';
	import LiveMode from '../components/LiveMode.svelte';
	import Container from '$lib/Container.svelte';
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{#if $isPreviewing}
	<div class="sticky top-0 z-50 bg-set-purple py-1.5 text-set-white">
		<Container>
			<div class="flex w-full items-center justify-between">
				<span class="font-mono text-sm font-medium"> You are currently in preview mode </span>
				<a href={`/preview/disable?redirect=${$page.url.pathname}`}>
					<button class="btn cursor-pointer font-mono font-normal uppercase btn-outline btn-sm">
						Disable preview mode
					</button>
				</a>
			</div>
		</Container>
	</div>
{/if}

<slot />

{#if $isPreviewing}
	<VisualEditing />
	<LiveMode />
{/if}
