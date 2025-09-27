<script>
	let { title, subtitle, href, coverAlt, coverSrc } = $props();
</script>

<a {href}>
	<div class="relative flex h-128 p-8 transition duration-300 hover:scale-97">
		<div class="z-20 mt-auto flex flex-col gap-4">
			<h3 class="font-display text-4xl font-medium text-neutral-200 uppercase">{title}</h3>
			<p class="text-set-gray">{subtitle}</p>
		</div>
		<div class="absolute top-0 left-0 z-10 h-full w-full"></div>

		<div
			class="absolute top-0 left-0 z-10 h-full w-full bg-set-black opacity-0 transition duration-300 hover:opacity-30"
		></div>

		<img
			class="absolute top-0 left-0 h-full w-full rounded-sm object-cover"
			alt={coverAlt ? coverAlt : ''}
			src={coverSrc ? coverSrc : 'placeholder-image.png'}
		/>
	</div>
</a>
