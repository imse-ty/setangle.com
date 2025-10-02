<script>
	import { Tween } from 'svelte/motion';
	import { cubicInOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	import NavItem from './NavItem.svelte';
	import { page } from '$app/state';
	import MobileNavItem from './MobileNavItem.svelte';

	let open = $state(false);
	let lastY = $state(0);
	let show = $state(true);

	const y = new Tween(0, { duration: 450, easing: cubicInOut });

	$effect(() => {
		document.documentElement.classList.toggle('overflow-hidden', open);
	});

	function onScroll() {
		const curr = window.scrollY;
		show = curr < lastY || curr <= 500;
		lastY = curr;
		y.set(show ? 0 : -120);
	}

	function toggleMenu() {
		open = !open;
		show = true;
	}

	function closeMenu() {
		open = false;
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

		<!-- Desktop Nav -->
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

		<!-- Mobile Menu Button -->
		<button
			onclick={toggleMenu}
			class="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
			aria-label="Toggle menu"
		>
			<span
				class="h-0.5 w-6 bg-white transition-all duration-300"
				class:rotate-45={open}
				class:translate-y-2={open}
			></span>
			<span class="h-0.5 w-6 bg-white transition-all duration-300" class:opacity-0={open}></span>
			<span
				class="h-0.5 w-6 bg-white transition-all duration-300"
				class:-rotate-45={open}
				class:-translate-y-2={open}
			></span>
		</button>
	</div>
</header>

<!-- Mobile Nav Overlay -->
{#if open}
	<div
		transition:fade={{ duration: 300 }}
		class="fixed inset-0 z-40 bg-neutral-900 pt-20 md:hidden"
	>
		<nav class="flex h-full flex-col px-6">
			<ul class="flex flex-col gap-4">
				<MobileNavItem href="/#reel" onclick={closeMenu}>Reel</MobileNavItem>
				<MobileNavItem
					isActive={page.url.pathname === '/work' || page.url.pathname.startsWith('/work')}
					href="/#work"
					onclick={closeMenu}>Work</MobileNavItem
				>
				<MobileNavItem href="/#about" onclick={closeMenu}>About</MobileNavItem>
				<MobileNavItem href="#contact" onclick={closeMenu}>Contact</MobileNavItem>
			</ul>
		</nav>
	</div>
{/if}
