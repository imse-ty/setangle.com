<script lang="ts">
	import { useQuery } from '@sanity/svelte-loader';
	import ContactSection from '$lib/Footer.svelte';
	import LogoCarousel from '../components/LogoCarousel.svelte';
	import AboutSection from '../components/AboutSection.svelte';
	import HomeHero from '../components/HomeHero.svelte';
	import ProjectsSection from '../components/ProjectsSection.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const q = useQuery(data);

	$: ({ data: projects } = $q);
</script>

<svelte:head>
	<title>Set Angle</title>

	<meta
		name="description"
		content="We blend animation, technology, and sound to transform ordinary stories into soulful brand experiences that inspire the culture we live in today."
	/>
</svelte:head>

<HomeHero />
<ProjectsSection {projects} />
<AboutSection />
