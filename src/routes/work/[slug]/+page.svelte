<script lang="ts">
	import Header from '$lib/Header.svelte';
	import ContactSection from '$lib/ContactSection.svelte';
	import Footer from '$lib/Footer.svelte';
	import WorkVideo from '../../../components/WorkVideo.svelte';
	import Container from '$lib/Container.svelte';
	import WorkHero from '../../../components/WorkHero.svelte';
	import ProjectCallout from '$lib/ProjectCallout.svelte';
	import { PortableText } from '@portabletext/svelte';
	import { useQuery } from '@sanity/svelte-loader';
	import type { PageData } from './$types';
	import ProjectImage from '$lib/ProjectImage.svelte';
	import ProjectVideo from '$lib/ProjectVideo.svelte';
	import VideoEmbed from '../../../components/VideoEmbed.svelte';
	import VimeoEmbed from '../../../components/VimeoEmbed.svelte';

	export let data: PageData;
	const q = useQuery(data);

	$: ({ data: project } = $q);

	const sanityComponents = {
		types: {
			// block-level components
			projectCallout: ProjectCallout,
			image: ProjectImage,
			vimeo: ProjectVideo
		}
	};
</script>

<svelte:head
	><title>{project.title} - Set Angle</title>

	{#if project.subtitle}
		<meta name="description" content={project.subtitle} />
	{/if}
</svelte:head>

<div class="flex flex-col gap-20 bg-set-black font-body text-set-white">
	<Container><Header /></Container>
	{#if project.videoUrl}
		<WorkVideo videoUrl={project.videoUrl} />
	{/if}
	<WorkHero
		title={project.title}
		summary={project.subtitle}
		info={project.info}
		stats={project.stats}
	/>

	{#if project.body}
		<Container>
			<div class="prose max-w-none !prose-invert">
				<PortableText value={project.body} components={sanityComponents} />
			</div>
		</Container>
	{/if}
	<ContactSection />
	<Footer />
</div>
