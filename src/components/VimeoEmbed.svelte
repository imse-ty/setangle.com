<script>
	import getVideoId from 'get-video-id';
	export let url;
	export let autoplay = false;
	export let breakContainer = false;

	$: vimeoId = url ? getVideoId(url)?.id : null;
	$: vimeoUrl = vimeoId
		? `https://player.vimeo.com/video/${vimeoId}?playsinline=0&transparent=0&loop=1&autoplay=${autoplay ? '1' : '0'}`
		: null;
</script>

{#if vimeoUrl}
	<div
		class="relative aspect-video overflow-hidden"
		class:my-4={breakContainer}
		class:lg\-mx-\[25\%\]={breakContainer}
		class:xl\-mx-\[50\%\]={breakContainer}
	>
		<iframe
			src={vimeoUrl}
			title="Vimeo video player"
			frameborder="0"
			allow="autoplay; fullscreen; picture-in-picture"
			class="absolute inset-0 h-full w-full"
			allowfullscreen
		></iframe>
	</div>
{/if}
