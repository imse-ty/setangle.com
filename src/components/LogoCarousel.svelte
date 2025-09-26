<script>
	import Container from '$lib/Container.svelte';
	import Chickfila from './logos/Chickfila.svelte';
	import Ford from './logos/Ford.svelte';
	import Google from './logos/Google.svelte';
	import KaiserPermanente from './logos/KaiserPermanente.svelte';
	import Maxon from './logos/Maxon.svelte';
	import Vmware from './logos/Vmware.svelte';
</script>

<Container>
	<section class="relative flex h-24 w-full items-center justify-between gap-8">
		<div class="absolute top-0 left-0 h-full w-1/8"></div>
		<div class="absolute top-0 right-0 h-full w-1/8"></div>

		<Google />
		<Ford />
		<Maxon />
		<Chickfila />
		<KaiserPermanente />
		<Vmware />
	</section>
</Container>
