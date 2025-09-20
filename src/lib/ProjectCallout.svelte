<script>
	let { portableText } = $props();
</script>

<section class="mx-auto flex w-full flex-col items-start gap-8 px-4 py-20 md:px-0 lg:flex-row">
	<!-- Left: Label aligned with paragraph top -->
	<div class="min-w-[140px]">
		<span class="text-s block font-mono tracking-widest text-set-white uppercase md:mt-[0.4em]">
			{portableText.value.label}
		</span>
	</div>

	<!-- Right: Big paragraph, clean line height, strong left alignment -->
	<div class="flex-1">
		<p
			class="!my-0 font-body text-[2rem] leading-tight font-medium tracking-tight text-set-white md:text-[2.6rem] md:leading-[1.13]"
		>
			{portableText.value.text}
		</p>
	</div>
</section>
