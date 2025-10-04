<!-- ProjectVideo.svelte -->
<script>
	export let src;
</script>

<video controls class="relative my-4 aspect-video overflow-hidden">
	<source {src} type="video/mp4" />
	Your browser does not support the video tag.
</video>
