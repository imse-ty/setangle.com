<script>
	import * as Card from '$lib/components/ui/card';
	import Badge from '../ui/badge/badge.svelte';
	Card;
</script>

<Card.Root class=" relative overflow-hidden">
	<Card.Header class="absolute top-0 flex w-full flex-row p-8">
		<div class="ml-auto flex gap-2">
			<Badge variant="secondary">Badge</Badge>
		</div>
	</Card.Header>
	<Card.Footer class="absolute bottom-0 z-10 flex-col items-start gap-4 p-8">
		<Card.Title tag="h3" class="text-3xl text-slate-100">Calculator 15s Spot</Card.Title>
		<Card.Description class="text-md font-medium text-slate-400"
			>What if the default calculator app had a marketing campaign?</Card.Description
		>
	</Card.Footer>
	<div class="absolute h-full w-full bg-gradient-to-t from-slate-800 to-transparent to-50%" />
	<img class="aspect-4/3 object-cover" src="/work/calculator.jpg" />
</Card.Root>
