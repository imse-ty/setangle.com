<script lang="ts">
	import { urlFor } from '$lib/sanity/image';

	interface ProjectGalleryProps {
		value?: {
			images?: Array<{
				asset: {
					_ref: string;
				};
				alt: string;
				caption?: string;
			}>;
			columns?: number;
			gap?: 'small' | 'medium' | 'large';
		};
	}

	let { portableText } = $props();

	console.log('[v0] ProjectGallery received value:', portableText);

	const images = portableText.value?.images || [];
	const columns = portableText.value?.columns || 2;
	const gap = portableText.value?.gap || 'medium';

	const gapClasses = {
		small: 'gap-2',
		medium: 'gap-4',
		large: 'gap-6'
	};

	const columnClasses = {
		1: 'grid-cols-1',
		2: 'grid-cols-1 md:grid-cols-2',
		3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
		4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
	};
</script>

{#if images.length === 0}
	<div class="border-muted-foreground/25 my-8 rounded-md border border-dashed p-8 text-center">
		<p class="text-muted-foreground text-sm">No images in this gallery</p>
	</div>
{:else}
	<div class="my-8 grid {columnClasses[columns as keyof typeof columnClasses]} gap-8">
		{#each images as image}
			<figure class="group bg-muted relative rounded-md">
				<img
					src={urlFor(image.asset).width(800).height(600).fit('crop').url() ||
						'/placeholder-image.png' ||
						'/placeholder.svg'}
					alt={image.alt}
					class="h-full w-full rounded-md object-cover transition-transform duration-500 group-hover:scale-102"
				/>
				{#if image.caption}
					<figcaption
						class="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					>
						{image.caption}
					</figcaption>
				{/if}
			</figure>
		{/each}
	</div>
{/if}
