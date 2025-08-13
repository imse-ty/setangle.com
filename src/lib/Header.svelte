<script>
	import NavItem from './NavItem.svelte';
</script>

<div class="flex items-center gap-4 py-6">
	<a href="/"><div class="font-display text-3xl font-bold">ANGLE</div></a>
	<div class="h-px w-full bg-set-gray"></div>
	<ul class="hidden gap-5 md:flex">
		<NavItem href="/#work">Work</NavItem>
		<NavItem href="/#about">About</NavItem>
		<NavItem href="#contact">Contact</NavItem>
	</ul>
</div>
