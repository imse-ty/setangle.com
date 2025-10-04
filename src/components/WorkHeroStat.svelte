<script>
	let { prefix, stat, suffix } = $props();
</script>

<div class="text-left">
	<span class="mb-1 block text-xs text-set-gray">{prefix}</span>
	<span class="font-display text-4xl leading-none font-bold">{stat}</span>
	<span class="mt-1 block text-xs text-set-gray">{suffix}</span>
</div>
