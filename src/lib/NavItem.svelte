<script>
	let { children, href } = $props();
</script>

<li class="font-mono uppercase"><a {href}>{@render children()}</a></li>
