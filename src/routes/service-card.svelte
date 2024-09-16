<script lang="ts">
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import MaterialSymbolsArrowOutward from 'virtual:icons/material-symbols/arrow-outward';

	export let title: string = 'Title';
	export let description: string = '';
</script>

<div class="flex flex-col gap-4">
	<MaterialSymbolsArrowOutward class="bg-muted rounded-full p-3 text-4xl" />

	<Separator />

	<h3 class="text-2xl font-semibold">{title}</h3>

	{#if description}
		<p>{description}</p>
	{/if}
</div>
