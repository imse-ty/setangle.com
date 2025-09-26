<script>
	let { title, subtitle, href, coverAlt, coverSrc } = $props();
</script>

<a {href}>
	<div class="relative flex h-128 p-8">
		<div class="z-20 mt-auto">
			<h3 class="text-3xl">{title}</h3>
			<p class="text-set-gray">{subtitle}</p>
		</div>
		<div class="absolute top-0 left-0 z-10 h-full w-full bg-set-black opacity-80"></div>
		{#if coverSrc}
			<img class="absolute top-0 left-0 h-full w-full object-cover" alt={coverAlt} src={coverSrc} />
		{/if}
	</div>
</a>
