<script>
	import Container from '$lib/Container.svelte';
	import VimeoEmbed from './VimeoEmbed.svelte';

	let { videoUrl } = $props();
</script>

<!-- Video/Image Banner Box, think this can go at the end maybe -->
<Container>
	<VimeoEmbed url={videoUrl} />
</Container>
