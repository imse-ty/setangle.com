<script>
	import Container from './Container.svelte';
	import NavItem from './NavItem.svelte';
</script>

<header class="fixed top-0 z-50 w-full px-8 backdrop-blur-xs md:px-16 xl:px-32.5">
	<div class="flex items-center gap-4 py-6">
		<a href="/"><div class="font-display text-3xl font-bold">ANGLE</div></a>
		<div class="hidden h-px w-full bg-set-gray md:block"></div>
		<nav class="hidden md:block">
			<ul class="hidden gap-5 md:flex">
				<NavItem href="/#work">Work</NavItem>
				<NavItem href="/#about">About</NavItem>
				<NavItem href="#contact">Contact</NavItem>
			</ul>
		</nav>
	</div>
</header>
