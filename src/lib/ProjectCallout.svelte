<script>
	let { portableText } = $props();
</script>

<section
	class="mx-auto flex w-full flex-col items-start gap-2 px-4 py-20 md:px-0 lg:flex-row lg:gap-8"
>
	<!-- Left: Label aligned with paragraph top -->

	<h2
		class="!mt-1 block min-w-[140px] font-mono !text-xl font-normal tracking-widest text-set-white uppercase"
	>
		{portableText.value.label}
	</h2>

	<!-- Right: Big paragraph, clean line height, strong left alignment -->

	<p
		class="!my-0 flex-1 font-body text-[2rem] leading-tight tracking-tight text-set-white md:text-[2.6rem] md:leading-[1.13]"
	>
		{portableText.value.text}
	</p>
</section>
