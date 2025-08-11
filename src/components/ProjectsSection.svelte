<script>
	import ProjectCard from '$lib/ProjectCard.svelte';
	let data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];
</script>

<div>
	<h2><span>Latest</span> projects</h2>
	<div>
		{#each data as d (d.id)}
			<ProjectCard
				title="Project title name"
				subtitle="We'll find the best visual way to export your story into a fine digital experience"
				{...d}
			/>
		{/each}
	</div>
</div>
