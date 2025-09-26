<script>
	import Container from '$lib/Container.svelte';
	import Chickfila from './logos/Chickfila.svelte';
	import Ford from './logos/Ford.svelte';
	import Google from './logos/Google.svelte';
	import KaiserPermanente from './logos/KaiserPermanente.svelte';
	import Maxon from './logos/Maxon.svelte';
	import Vmware from './logos/Vmware.svelte';
</script>

<section>
	<Container>
		<div class="relative flex h-50 w-full items-center justify-between gap-8">
			<Google />
			<Ford />
			<Maxon />
			<Chickfila />
			<KaiserPermanente />
			<Vmware />
		</div>
	</Container>
</section>
