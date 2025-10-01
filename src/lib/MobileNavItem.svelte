<script>
	let { children, href, onclick, isActive = false } = $props();
</script>

<li>
	<a
		{href}
		{onclick}
		aria-current={isActive}
		class="block font-mono text-4xl font-medium text-set-white aria-current:font-bold"
		>{@render children()}
	</a>
</li>
