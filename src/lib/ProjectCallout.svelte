<script>
	let { portableText } = $props();
</script>

<div class="mx-auto flex w-full flex-col items-start gap-2 px-4 py-16 md:px-0 lg:flex-row lg:gap-8">
	<!-- Left: Label aligned with paragraph top -->

	<h2
		class="!mt-1 block min-w-[140px] font-mono !text-xl font-bold tracking-widest text-set-gray uppercase"
	>
		{portableText.value.label}
	</h2>

	<!-- Right: Big paragraph, clean line height, strong left alignment -->

	<p class="!my-0 flex-1 font-body text-xl leading-tight text-set-white md:text-4xl">
		{portableText.value.text}
	</p>
</div>
