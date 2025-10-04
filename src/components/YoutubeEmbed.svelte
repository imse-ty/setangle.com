<script>
	import getVideoId from 'get-video-id';
	export let url;

	$: youtubeId = url ? getVideoId(url)?.id : null;
	$: youtubeUrl = youtubeId
		? `https://www.youtube.com/embed/${youtubeId}?autoplay=1&playlist=${youtubeId}&loop=1`
		: null;
</script>

{#if youtubeUrl}
	<figure class="relative aspect-video h-full w-full overflow-hidden">
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
