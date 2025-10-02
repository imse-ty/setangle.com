<script>
	import { fade } from 'svelte/transition';
	import NavItem from './NavItem.svelte';
	import { page } from '$app/state';
	import MobileNavItem from './MobileNavItem.svelte';
	import { isPreviewing } from '@sanity/visual-editing/svelte';

	let open = $state(false);

	$effect(() => {
		document.documentElement.classList.toggle('overflow-hidden', open);
	});

	function toggleMenu() {
		open = !open;
	}

	function closeMenu() {
		open = false;
	}
</script>

<header class="sticky top-0 z-50 w-full bg-neutral-900/75 will-change-transform">
	{#if $isPreviewing}
		<div class="bg-set-purple py-0.5 text-set-white">
			<div class="flex w-full items-center justify-between px-6 md:px-16 xl:px-32.5">
				<span class="font-mono text-sm"> You are currently in preview mode </span>
				<a href={`/preview/disable?redirect=${page.url.pathname}`}>
					<button class="btn cursor-pointer font-mono font-normal uppercase btn-outline btn-sm">
						Disable preview mode
					</button>
				</a>
			</div>
		</div>
	{/if}
	<div class="flex items-center justify-between px-6 py-4 md:px-16 md:py-6 xl:px-32.5">
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
