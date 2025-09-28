<script>
	import { tweened } from 'svelte/motion';
	import { cubicInOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import NavItem from './NavItem.svelte';

	let open = false;
	let lastY = 0;
	let show = true;
	const y = tweened(0, { duration: 450, easing: cubicInOut });

	function toggle() {
		open = !open;
		document.documentElement.classList.toggle('overflow-hidden', open);
	}

	onMount(() => {
		function onScroll() {
			const curr = window.scrollY;
			show = curr < lastY || curr <= 0; // hide as soon as scrolling down
			lastY = curr;
			y.set(show ? 0 : -120);
		}
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<header
	class="fixed top-0 z-50 w-full px-6 backdrop-blur-xs will-change-transform md:px-16 xl:px-32.5"
	style="transform: translateY({$y}px); transition: transform 0.45s cubic-bezier(0.25, 1, 0.5, 1);"
>
	<div class="flex items-center justify-between py-4 md:py-6">
		<a href="/" class="font-display text-2xl font-bold md:text-3xl">ANGLE</a>

		<nav class="hidden md:block">
			<ul class="flex items-center gap-6">
				<NavItem href="/#reel">Reel</NavItem>
				<NavItem href="/#work">Work</NavItem>
				<NavItem href="/#about">About</NavItem>
				<NavItem href="#contact">Contact</NavItem>
			</ul>
		</nav>
	</div>
</header>
