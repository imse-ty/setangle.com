<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import WorkCard from '$lib/components/work/work-card.svelte';
	import MaterialSymbolsArrowOutward from 'virtual:icons/material-symbols/arrow-outward';
	import ServiceCard from './service-card.svelte';
</script>

<section class="container grid grid-cols-3 gap-8">
	<Card.Root class="col-span-2">
		<Card.Header class="gap-8">
			<Card.Title tag="h1" class="font-display text-2xl font-semibold md:text-6xl">
				Angle is a animation and web development studio
			</Card.Title>
			<Card.Description class="text-3xl"
				>We help tech brands and enterprises shine by creating soulful motion graphics and web
				experiences for marketing campaigns and events.</Card.Description
			>
		</Card.Header>

		<Card.Footer class="gap-4">
			<Button>Let's book a call</Button>
			<Button variant="outline">Play reel</Button>
		</Card.Footer>
	</Card.Root>

	<Card.Root class="bg-muted col-span-1 rounded-3xl" />
</section>

<!-- <section class="container">
	<Card.Root class="bg-muted aspect-video rounded-3xl" />
</section> -->

<section class="container">
	<div class=" grid grid-cols-2 gap-8">
		<WorkCard />
		<WorkCard />
		<WorkCard />
		<WorkCard />
	</div>
</section>

<section class="container">
	<Card.Root>
		<Card.Header class="h-64">
			<Card.Title tag="h2" class="font-display text-2xl font-semibold md:text-6xl">
				Services
			</Card.Title>
		</Card.Header>

		<Card.Content class="grid grid-cols-3 gap-16">
			<ServiceCard title="Motion design" />
			<ServiceCard title="3D animation" />
			<ServiceCard title="Development" />
		</Card.Content>
	</Card.Root>
</section>

<section class="container">
	<Card.Root class="text-center ">
		<Card.Header class="items-center">
			<MaterialSymbolsArrowOutward class="bg-muted rounded-full p-3 text-4xl" />
			<Card.Title tag="h2" class="font-display max-w-3xl text-2xl font-semibold md:text-4xl">
				Thinking of collaborating? We're here to listen! Let's connect.
			</Card.Title>
		</Card.Header>

		<Card.Footer class="flex-col gap-8">
			<Button>Let's book a call</Button>
		</Card.Footer>
	</Card.Root>
</section>
