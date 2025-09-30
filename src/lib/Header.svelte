<script>
	import { Tween } from 'svelte/motion';
	import { cubicInOut } from 'svelte/easing';
	import NavItem from './NavItem.svelte';
	import { page } from '$app/state';

	let open = $state(false);
	let lastY = $state(0);
	let show = $state(true);

	const y = new Tween(0, { duration: 450, easing: cubicInOut });

	$effect(() => {
		document.documentElement.classList.toggle('overflow-hidden', open);
	});

	function onScroll() {
		const curr = window.scrollY;
		show = curr < lastY || curr <= 0;
		lastY = curr;
		y.set(show ? 0 : -120); // or: y.target = show ? 0 : -120
	}
</script>

<svelte:window onscroll={onScroll} />

<header
	class="fixed top-0 z-50 w-full bg-neutral-900/75 px-6 will-change-transform md:px-16 xl:px-32.5"
	style:transform={`translateY(${y.current}px)`}
	style:transition="transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)"
>
	<div class="flex items-center justify-between py-4 md:py-6">
		<a href="/" class="font-display text-2xl font-bold md:text-3xl">ANGLE</a>

		<nav class="hidden md:block">
			<ul class="flex items-center gap-6">
				<NavItem href="/#reel">Reel</NavItem>
				<NavItem
					isActive={page.url.pathname === '/work' || page.url.pathname.startsWith('/work')}
					href="/#work">Work</NavItem
				>
				<NavItem href="/#about">About</NavItem>
				<NavItem href="#contact">Contact</NavItem>
			</ul>
		</nav>
	</div>
</header>
