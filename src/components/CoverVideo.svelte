<script>
	let { src, poster = '' } = $props();
</script>

<video autoplay loop muted playsinline {poster} class="m-h-full h-full w-full object-cover">
	<source {src} type="video/webm" />
	Your browser does not support the video tag.
</video>
