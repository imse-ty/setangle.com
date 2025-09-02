<script>
	import getVideoId from 'get-video-id';
	export let url;

	$: youtubeId = url ? getVideoId(url)?.id : null;
	$: youtubeUrl = youtubeId ? `https://www.youtube.com/embed/${youtubeId}` : null;
</script>

{#if youtubeUrl}
	<figure class="relative my-4 aspect-video overflow-hidden lg:-mx-[25%] xl:-mx-[50%]">
		<iframe
			src={youtubeUrl}
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			class="absolute inset-0 h-full w-full"
			allowfullscreen
		></iframe>
	</figure>
{/if}
