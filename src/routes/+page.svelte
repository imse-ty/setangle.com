<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card';
	import MaterialSymbolsArrowOutward from 'virtual:icons/material-symbols/arrow-outward';
</script>

<section class="container grid grid-cols-3 gap-8">
	<Card.Root class="col-span-2">
		<Card.Header>
			<Card.Title tag="h1" class="font-display text-2xl font-semibold md:text-6xl">
				Transforming the ordinary into the extraordinary
			</Card.Title>
		</Card.Header>

		<Card.Footer class="flex-col items-start gap-8">
			<Button>Let's book a call</Button>
			<p>© Founded in 2024</p>
		</Card.Footer>
	</Card.Root>
	<div class="bg-muted col-span-1 rounded-3xl" />
</section>

<section class="container">
	<Card.Root class="text-center">
		<Card.Header class="items-center">
			<MaterialSymbolsArrowOutward class="bg-muted rounded-full p-3 text-4xl" />
			<Card.Title tag="h2" class="font-display text-2xl font-semibold md:text-4xl">
				Ready to design and level up your Brands?
			</Card.Title>
		</Card.Header>

		<Card.Footer class="flex-col gap-8">
			<Button>Let's book a call</Button>
		</Card.Footer>
	</Card.Root>
</section>
