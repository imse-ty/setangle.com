<script>
	import * as Card from '$lib/components/ui/card';
	import Button from '$lib/components/ui/button/button.svelte';
	import MaterialSymbolsAlternateEmail from '~icons/material-symbols/alternate-email';
	import MaterialSymbolsPinDrop from '~icons/material-symbols/pin-drop';
</script>

<section class="container">
	<Card.Root class="col-span-2">
		<Card.Header class="gap-2 md:gap-4">
			<Card.Title tag="h1" class="font-display text-2xl font-semibold md:text-6xl">
				Let's chat. Fill out the form below!
			</Card.Title>
			<Card.Description class="text-1xl md:text-2xl"
				>Let's learn more about your project so we can understand your creative needs and how we can
				help.</Card.Description
			>
		</Card.Header>
		<Card.Content class="flex flex-col gap-4">
			<div class="flex items-center gap-4">
				<MaterialSymbolsAlternateEmail class="bg-muted rounded-full p-3 text-4xl" />
				<Button
					variant="link"
					class="font-mediums p-0 text-2xl"
					href="mailto:greetings@setangle.com">greetings@setangle.com</Button
				>
			</div>
			<div class="flex items-center gap-4">
				<MaterialSymbolsPinDrop class="bg-muted rounded-full p-3 text-4xl" />
				<p class="p-0 text-2xl font-medium">Atlanta, GA</p>
			</div>
		</Card.Content>
	</Card.Root>
</section>

<section class="container h-screen">
	<iframe
		src="https://cal.com/team/setangle/discuss"
		width="100%"
		height="600"
		frameborder="0"
		allow="clipboard-write; fullscreen"
		class="h-full rounded-3xl"
	/>
</section>
