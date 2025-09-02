<script>
	import Container from '$lib/Container.svelte';
	import WorkHeroItem from './WorkHeroItem.svelte';
	import WorkHeroStat from './WorkHeroStat.svelte';

	let { title, summary, info, stats } = $props();
</script>

<Container>
	<!-- Outer container: max width, centered -->
	<div
		class="relative mx-auto mb-12 grid w-full max-w-[1280px] grid-cols-1 gap-16 border border-gray-500 p-12 lg:grid-cols-[4fr_5fr] lg:gap-0"
	>
		<!-- Divider: perfectly at 4/9, full height -->
		<div
			class="absolute top-0 bottom-0 hidden border-l border-gray-500 lg:block"
			style="right:46%;"
		></div>

		<!-- Left column: uses min-w-0 for clean ellipsis and pr-12 on desktop -->
		<div class="min-w-0 lg:pr-12">
			<h1
				class="mb-8 font-display text-7xl leading-none font-bold tracking-tight uppercase 2xl:text-9xl"
			>
				{title}
			</h1>
			<p class="text-xl leading-snug text-gray-400">
				{summary}
			</p>
		</div>

		<!-- Right column: details and stats, starts after divider -->
		<div
			class="relative z-10 flex flex-col justify-between space-y-4 pl-0 text-sm text-gray-200 lg:pl-36 xl:pl-40"
		>
			<div class="flex h-full flex-col justify-between">
				<div class="font-mono">
					{#if info && info.length}
						<ul class="mb-6 space-y-2">
							{#each info as { label, text }, i (i)}
								<WorkHeroItem {label} {text} />
							{/each}
						</ul>
					{/if}
				</div>
				<div class="flex justify-between gap-12 pt-6 text-lg font-bold">
					{#if stats && stats.length > 0}
						<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
							{#each stats as { prefix, stat, suffix }, i (i)}
								<WorkHeroStat {prefix} {stat} {suffix} />
							{/each}
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</Container>
