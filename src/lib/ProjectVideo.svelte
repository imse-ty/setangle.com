<script>
	import VimeoEmbed from '../components/VimeoEmbed.svelte';

	let { portableText } = $props();

	console.log(portableText);
</script>

<VimeoEmbed url={portableText.value.url} />
