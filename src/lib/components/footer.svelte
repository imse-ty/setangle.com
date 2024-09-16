<script lang="ts">
	import Button from './ui/button/button.svelte';
	import RiTwitterXFill from '~icons/ri/twitter-x-fill';
	import MdiLinkedin from '~icons/mdi/linkedin';
	import MdiInstagram from '~icons/mdi/instagram';

	let buttonStyles: string =
		'bg-background text-muted-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent transition-all duration-300 hover:font-bold focus:font-bold focus:text-accent-foreground rounded-lg  text-sm font-medium transition-colors focus:outline-none ';
</script>

<footer class="container flex h-20 w-full items-center justify-between">
	<p class="text-sm font-semibold opacity-50">Copyright © 2024 Set Angle. All rights reserved.</p>
	<div>
		<Button
			variant="ghost"
			href="https://www.instagram.com/set_angle"
			target="_blank"
			rel="noindex nofollow"><MdiInstagram class="h-6 w-6" /></Button
		>
		<Button
			variant="ghost"
			href="https://www.linkedin.com/company/setangle"
			target="_blank"
			rel="noindex nofollow"><MdiLinkedin class="h-6 w-6" /></Button
		>
		<Button variant="ghost" href="https://x.com/set_angle" target="_blank" rel="noindex nofollow"
			><RiTwitterXFill class="h-6 w-6" /></Button
		>
	</div>
</footer>
