<script>
	import Container from '$lib/Container.svelte';
	import ProjectCard from '$lib/ProjectCard.svelte';
	let data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];
</script>

<Container>
	<div id="work" class="flex flex-col gap-16">
		<h2 class="font-display text-6xl font-medium uppercase">
			<span class="text-set-gray">Latest</span> projects
		</h2>
		<div class="grid-cols-2 lg:grid">
			{#each data as d (d.id)}
				<ProjectCard
					title="Project title name"
					subtitle="We'll find the best visual way to export your story into a fine digital experience"
					href="/work"
					{...d}
				/>
			{/each}
		</div>
	</div>
</Container>
