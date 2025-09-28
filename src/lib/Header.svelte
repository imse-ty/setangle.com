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
	class="fixed top-0 z-50 w-full px-6 backdrop-blur-xs will-change-transform md:px-12 xl:px-24"
	style="transform: translateY({$y}px); transition: transform 0.45s cubic-bezier(0.25, 1, 0.5, 1);"
>
	<div class="flex items-center justify-between py-4 md:py-6">
		<a href="/" class="font-display text-2xl font-bold md:text-3xl">ANGLE</a>

		<nav class="hidden md:block">
			<ul class="flex items-center gap-6">
				<NavItem href="/#work">Work</NavItem>
				<NavItem href="/#about">About</NavItem>
				<NavItem href="#contact">Contact</NavItem>
			</ul>
		</nav>

		<button
			class="inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 ring-white/15 md:hidden"
			on:click={toggle}
			aria-label="Menu"
		>
			<div class="relative h-5 w-5">
				<span
					class="absolute inset-x-0 top-0 h-0.5 bg-white transition-transform duration-300"
					style="transform: translateY({open ? '10px' : '0'}) rotate({open ? '45deg' : '0'})"
				></span>
				<span
					class="absolute inset-x-0 top-2.5 h-0.5 bg-white transition-opacity duration-300"
					style="opacity: {open ? 0 : 1}"
				></span>
				<span
					class="absolute inset-x-0 bottom-0 h-0.5 bg-white transition-transform duration-300"
					style="transform: translateY({open ? '-10px' : '0'}) rotate({open ? '-45deg' : '0'})"
				></span>
			</div>
		</button>
	</div>
</header>

{#if open}
	<div
		class="fixed inset-0 z-40 bg-neutral-950/90 backdrop-blur-sm transition-opacity duration-300"
		on:click={toggle}
	/>
	<nav class="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 px-8">
		<ul class="w-full max-w-sm text-center">
			<li class="py-4">
				<a
					class="font-body text-3xl text-white/90 hover:text-white md:text-4xl"
					href="/#work"
					on:click={() => (open = false)}>Work</a
				>
			</li>
			<li class="py-4">
				<a
					class="font-body text-3xl text-white/90 hover:text-white md:text-4xl"
					href="/#about"
					on:click={() => (open = false)}>About</a
				>
			</li>
			<li class="py-4">
				<a
					class="font-body text-3xl text-white/90 hover:text-white md:text-4xl"
					href="#contact"
					on:click={() => (open = false)}>Contact</a
				>
			</li>
		</ul>
	</nav>
{/if}
