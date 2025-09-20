<script lang="ts">
	import { useQuery } from '@sanity/svelte-loader';
	import ContactSection from '$lib/ContactSection.svelte';
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import LogoCarousel from '../components/LogoCarousel.svelte';
	import AboutSection from '../components/AboutSection.svelte';
	import HomeHero from '../components/HomeHero.svelte';
	import ProjectsSection from '../components/ProjectsSection.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const q = useQuery(data);

	$: ({ data: projects } = $q);
</script>

<div class="flex flex-col gap-20 bg-set-black font-body text-set-white">
	<!-- <Header /> -->
	<HomeHero />
	<LogoCarousel />

	<main>
		<ProjectsSection {projects} />
	</main>
	<AboutSection />
	<ContactSection />
	<Footer />
</div>
