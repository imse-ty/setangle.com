<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import WorkCard from '$lib/components/work/work-card.svelte';
	import MaterialSymbolsArrowOutward from 'virtual:icons/material-symbols/arrow-outward';
	import ServiceCard from './service-card.svelte';
</script>

<section class="container flex grid-cols-1 flex-col gap-8 xl:grid xl:grid-cols-3">
	<Card.Root class="col-span-2">
		<Card.Header class="gap-2 md:gap-8">
			<Card.Title tag="h1" class="font-display text-2xl font-semibold md:text-6xl">
				Angle is a animation and web development studio
			</Card.Title>
			<Card.Description class="text-1xl md:text-2xl"
				>We help tech brands and enterprises shine by creating soulful motion graphics and web
				experiences for marketing campaigns and events.</Card.Description
			>
		</Card.Header>

		<Card.Footer class="gap-4">
			<Button size="lg">Get in touch</Button>
			<Button size="lg" variant="outline">Play reel</Button>
		</Card.Footer>
	</Card.Root>

	<Card.Root class="bg-muted col-span-1 aspect-video rounded-3xl xl:aspect-auto" />
</section>

<!-- <section class="container">
	<Card.Root class="bg-muted aspect-video rounded-3xl" />
</section> -->

<section class="container" id="work">
	<div class=" grid grid-cols-1 gap-8 lg:grid-cols-2">
		<WorkCard />
		<WorkCard />
		<WorkCard />
		<WorkCard />
	</div>
</section>

<section class="container" id="services">
	<Card.Root>
		<Card.Header class="h-64">
			<Card.Title tag="h2" class="font-display text-2xl font-semibold md:text-6xl">
				Services
			</Card.Title>
		</Card.Header>

		<Card.Content class="grid grid-cols-1 gap-16 md:grid-cols-3">
			<ServiceCard title="Motion design" />
			<ServiceCard title="3D animation" />
			<ServiceCard title="Development" />
		</Card.Content>
	</Card.Root>
</section>

<section class="container" id="contact">
	<Card.Root class="text-center ">
		<Card.Header class="items-center">
			<MaterialSymbolsArrowOutward class="bg-muted rounded-full p-3 text-4xl" />
			<Card.Title tag="h2" class="font-display max-w-3xl text-2xl font-semibold md:text-4xl">
				Thinking of collaborating? We're here to listen! Let's connect.
			</Card.Title>
		</Card.Header>

		<Card.Footer class="flex-col gap-8">
			<Button size="lg">Let's book a call</Button>
		</Card.Footer>
	</Card.Root>
</section>
