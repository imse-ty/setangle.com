<script>
	import Container from '$lib/Container.svelte';
	import ProjectCard from '$lib/ProjectCard.svelte';
	import { urlFor } from '$lib/sanity/image';

	let { projects } = $props();
</script>

<section id="work" class="snap-start">
	<Container>
		<div class="flex h-full flex-col gap-8 py-32">
			<h2 class="font-display text-4xl font-medium uppercase md:text-6xl">
				<span class="text-set-gray">Latest</span> projects
			</h2>
			<div class="grid-col-1 grid gap-2 sm:grid-cols-2">
				{#each projects as project}
					<ProjectCard
						href={`/work/${project.slug.current}`}
						title={project.title}
						subtitle={project.subtitle}
						coverAlt={project.cover?.alt || project.title}
						coverSrc={project.cover && project.cover.asset
							? urlFor(project.cover).width(600).url()
							: undefined}
					/>
				{/each}
			</div>
		</div>
	</Container>
</section>
