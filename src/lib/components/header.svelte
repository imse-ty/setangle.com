<script>
	import * as Drawer from '$lib/components/ui/drawer';
	import Navigation from './navigation.svelte';
	import MaterialSymbolsMenu from '~icons/material-symbols/menu';
</script>

<header
	class="bg-background container sticky top-0 z-50 flex h-20 w-full items-center justify-between"
>
	<!-- Logo -->
	<a href="/" class="flex items-center gap-2">
		<img src="/logo.svg" alt="Set Angle logo" class="h-8 w-8" />
		<span class="sr-only">Set Angle</span>
	</a>

	<!-- Desktop Navigation -->
	<nav class="hidden items-center gap-2 md:flex">
		<Navigation />
	</nav>

	<!-- Drawer Component for Mobile -->
	<Drawer.Root shouldScaleBackground>
		<Drawer.Trigger class="md:hidden"
			><MaterialSymbolsMenu class="text-primary h-7 w-7" /></Drawer.Trigger
		>
		<Drawer.Portal>
			<Drawer.Content>
				<div class="flex flex-col space-y-4 p-6">
					<Navigation />
				</div>
			</Drawer.Content>
		</Drawer.Portal>
	</Drawer.Root>
</header>
