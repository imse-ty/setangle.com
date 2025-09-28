<script>
	let { children, href, label } = $props();
</script>

<div class="flex flex-col gap-2 md:gap-4">
	<h3 class="font-mono text-sm text-neutral-400 uppercase">[{label}]</h3>
	<a {href} target="_blank" class="lg:text-2xl"><p>{@render children()}</p></a>
</div>
