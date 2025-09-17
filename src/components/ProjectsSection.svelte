<script>
	import Container from '$lib/Container.svelte';
	import ProjectCard from '$lib/ProjectCard.svelte';
	import { urlFor } from '$lib/sanity';

	let { projects } = $props();
</script>

<Container>
	<div id="work" class="flex flex-col gap-16">
		<h2 class="font-display text-6xl font-medium uppercase">
			<span class="text-set-gray">Latest</span> projects
		</h2>
		<div class="grid-cols-2 lg:grid">
			{#each projects.items as project}
				<ProjectCard
					href={`/work/${project.slug}`}
					title={project.title}
					subtitle={project.subtitle}
					coverAlt={project.cover?.alt || project.title}
					coverSrc={project.cover ? urlFor(project.cover).width(600).url() : undefined}
				/>
			{/each}
		</div>
	</div>
</Container>
