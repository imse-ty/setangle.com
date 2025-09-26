<script>
	import Container from '$lib/Container.svelte';
	import VimeoEmbed from './VimeoEmbed.svelte';
	import WorkHeroItem from './WorkHeroItem.svelte';
	import WorkHeroStat from './WorkHeroStat.svelte';

	let { title, summary, info, stats, videoUrl } = $props();
</script>

<Container>
	<header>
		{#if videoUrl}
			<div class="mb-12"><VimeoEmbed url={videoUrl} /></div>
		{/if}

		<!-- Outer container: max width, centered -->
		<div
			class="relative mx-auto mb-12 flex w-full flex-col gap-16 border border-set-gray lg:flex-row lg:gap-0"
		>
			<!-- Left column: uses min-w-0 for clean ellipsis and pr-12 on desktop -->
			<div class="flex-1 p-12">
				<h1 class="mb-8 font-display text-7xl leading-none font-bold uppercase 2xl:text-9xl">
					{title}
				</h1>
				<p class="text-xl leading-snug text-set-gray">
					{summary}
				</p>
			</div>

			<!-- Right column: details and stats, starts after divider -->
			<div
				class="relative flex flex-1 flex-col justify-between border-t-1 border-set-gray p-12 lg:border-t-0 lg:border-l-1"
			>
				{#if info && info.length}
					<ul class="mb-6 space-y-2">
						{#each info as { label, text }, i (i)}
							<WorkHeroItem {label} {text} />
						{/each}
					</ul>
				{/if}

				{#if stats && stats.length > 0}
					<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{#each stats as { prefix, stat, suffix }, i (i)}
							<WorkHeroStat {prefix} {stat} {suffix} />
						{/each}
					</div>
				{/if}
			</div>
		</div>
	</header>
</Container>
