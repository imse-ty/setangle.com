<script>
	let { title, subtitle, href, coverAlt, coverSrc } = $props();
</script>

<a {href}>
	<div class="relative flex h-64 p-4 transition duration-300 hover:scale-97 lg:h-98">
		<div class="z-20 mt-auto flex flex-col">
			<h3 class="font-display text-3xl font-medium text-neutral-300 uppercase md:text-4xl">
				{title}
			</h3>
			{#if subtitle}<p class="text-set-gray">{subtitle}</p>{/if}
		</div>
		<div class="absolute top-0 left-0 z-10 h-full w-full"></div>

		<div
			class="absolute top-0 left-0 z-10 h-full w-full bg-linear-to-t from-set-black to-transparent opacity-80 transition duration-300 hover:opacity-100"
		></div>

		<img
			class="absolute top-0 left-0 h-full w-full rounded-xs object-cover"
			alt={coverAlt ? coverAlt : ''}
			src={coverSrc ? coverSrc : 'placeholder-image.png'}
		/>
	</div>
</a>
