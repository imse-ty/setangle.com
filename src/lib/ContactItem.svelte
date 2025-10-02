<script>
	let { children, href, label, isExternalLink = false } = $props();
</script>

<div class="flex flex-col gap-2 md:gap-4">
	<h3 class="b-b font-mono text-sm text-neutral-400 uppercase">[{label}]</h3>
	<a
		{href}
		target={isExternalLink ? '_blank' : ''}
		rel={isExternalLink ? 'noopener noreferrer' : ''}
		class="border-b-1 border-transparent transition-colors duration-300 hover:border-inherit hover:text-set-gray lg:text-2xl"
		><p>{@render children()}</p></a
	>
</div>
