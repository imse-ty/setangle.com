<script>
	let { label, text } = $props();
</script>

<li class="flex items-center justify-between border-b border-set-gray py-2 font-mono">
	<span class="tracking-wide text-set-gray uppercase">{label}</span>
	<span class="font-medium uppercase">{text}</span>
</li>
