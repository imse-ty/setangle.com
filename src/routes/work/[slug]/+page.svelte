<script>
	import Header from '$lib/Header.svelte';
	import { PortableText } from '@portabletext/svelte';
	import { urlFor } from '$lib/sanity';
	import ContactSection from '$lib/ContactSection.svelte';
	import Footer from '$lib/Footer.svelte';
	import WorkVideo from '../../../components/WorkVideo.svelte';
	import Container from '$lib/Container.svelte';
	import WorkHero from '../../../components/WorkHero.svelte';
	import ProjectCallout from '$lib/ProjectCallout.svelte';

	export let data;
	const { doc } = data;

	const sanityComponents = {
		types: {
			// block-level components
			projectCallout: ProjectCallout
		}
	};
</script>

<svelte:head><title>{doc.title}</title></svelte:head>

<div class="flex flex-col gap-20 bg-set-black font-body text-set-white">
	<Container><Header /></Container>
	{#if doc.videoUrl}
		<WorkVideo videoUrl={doc.videoUrl} />
	{/if}
	<WorkHero title={doc.title} summary={doc.subtitle} info={doc.info} stats={doc.stats} />
	{#if doc.body}
		<Container>
			<div class="prose max-w-none !prose-invert">
				<PortableText value={doc.body} components={sanityComponents} />
			</div>
		</Container>
	{/if}
	<ContactSection />
	<Footer />
</div>
