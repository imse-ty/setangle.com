<script>
	let { prefix, stat, suffix } = $props();
</script>

<div class="text-left">
	<span class="mb-1 block text-xs text-gray-400">{prefix}</span>
	<span class="font-display text-4xl leading-none text-white">{stat}</span>
	<span class="mt-1 block text-xs text-gray-400">{suffix}</span>
</div>
