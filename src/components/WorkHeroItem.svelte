<script>
	let { label, text } = $props();
</script>

<li class="flex items-center justify-between border-b border-gray-600 py-2">
	<span class="tracking-wide text-gray-400 uppercase">{label}</span>
	<span class="font-medium uppercase">{text}</span>
</li>
