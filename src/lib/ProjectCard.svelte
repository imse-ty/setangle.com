<script>
	let { title, subtitle, href } = $props();
</script>

<a {href}>
	<div class="flex h-128 border-1 border-set-gray p-8">
		<div class="mt-auto">
			<h3 class="text-3xl">{title}</h3>
			<p class="text-set-gray">{subtitle}</p>
		</div>
	</div>
</a>
