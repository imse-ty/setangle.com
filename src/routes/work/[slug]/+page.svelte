<script lang="ts">
	import Header from '$lib/Header.svelte';
	import ContactSection from '$lib/Footer.svelte';
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
	import ProjectGallery from '$lib/ProjectGallery.svelte';

	export let data: PageData;
	const q = useQuery(data);

	$: ({ data: project } = $q);

	const sanityComponents = {
		types: {
			// block-level components
			projectCallout: ProjectCallout,
			image: ProjectImage,
			projectGallery: ProjectGallery,
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

<article class="py-32">
	<WorkHero
		title={project.title}
		summary={project.summary}
		info={project.info}
		stats={project.stats}
		videoUrl={project.videoUrl}
	/>

	{#if project.body}
		<Container>
			<div class="prose max-w-none !prose-invert">
				<PortableText value={project.body} components={sanityComponents} />
			</div>
		</Container>
	{/if}
</article>
