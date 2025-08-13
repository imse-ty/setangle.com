<script>
	import Header from '$lib/Header.svelte';
	import { PortableText } from '@portabletext/svelte';
	import { urlFor } from '$lib/sanity';
	import ContactSection from '$lib/ContactSection.svelte';
	export let data;
	const { doc } = data;
</script>

<svelte:head><title>{doc.title}</title></svelte:head>

<div class="flex flex-col gap-20 bg-set-black pb-24 font-body text-set-white">
	<Header />
	<h1 class="font-display text-5xl font-medium tracking-tight lg:text-8xl xl:text-9xl">
		{doc.title}
	</h1>

	<p>{doc.subtitle}</p>

	<a href="/#work"><button class="btn btn-outline">Go back</button></a>

	{#if doc.cover?.asset}
		<img
			class="max-w-1/2"
			src={urlFor(doc.cover).width(1600).url()}
			alt={doc.cover?.alt || doc.title}
		/>
	{/if}

	<ContactSection />
</div>
