<script lang="ts">
	let menuButtonStyles: string =
		'bg-background text-muted-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent transition-all duration-300 hover:font-bold focus:font-bold focus:text-accent-foreground rounded-lg px-4 py-2 text-sm font-medium transition-colors focus:outline-none';
</script>

<a href="/" class={menuButtonStyles} data-active="true"> Home </a>
<a href="/#work" class={menuButtonStyles}> Work </a>
<a href="/#services" class={menuButtonStyles}> Services </a>
<a href="/#contact" class={menuButtonStyles}> Contact </a>
