<script>
	let { children, href, isActive = false } = $props();
</script>

<li class="font-mono uppercase">
	<a {href} aria-current={isActive} class="aria-current:font-bold">{@render children()}</a>
</li>
