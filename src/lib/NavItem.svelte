<script>
	let { children, href, isActive = false } = $props();
</script>

<li class="font-mono uppercase hover:text-set-gray">
	<a
		{href}
		aria-current={isActive}
		class="border-b-1 border-transparent transition-colors duration-300 hover:border-inherit aria-current:border-inherit aria-current:font-bold"
		>{@render children()}</a
	>
</li>
