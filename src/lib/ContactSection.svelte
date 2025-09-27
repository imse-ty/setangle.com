<script>
	import Container from './Container.svelte';
	import { onMount } from 'svelte';

	let date = new Date();
	$: hour = date.getHours();
	$: min = date.getMinutes();
	$: sec = date.getSeconds();
	let dayOrNight = 'AM';

	onMount(() => {
		const interval = setInterval(() => {
			date = new Date();
			dayOrNight = hour >= 12 ? 'PM' : 'AM';
		}, 1000);
	});
</script>

<section id="contact" class="h-screen">
	<Container>
		<div class="flex h-full flex-col justify-between py-64">
			<h2 class="font-display text-9xl font-medium uppercase">
				<span class="text-set-gray">Lets</span> talk
			</h2>
			<div class="flex flex-col gap-8 text-3xl tracking-widest text-neutral-100">
				<p class="font-bold">ATL {hour - 12}:{min}:{sec} {dayOrNight} (GMT-4)</p>

				<div class="flex flex-col gap-2">
					<a href="mailto:greetings@setangle.com">greetings@setangle.com</a>
					<a href="tel:+17706095007">+1 (770) 609-5007</a>
				</div>

				<a
					href="https://maps.app.goo.gl/Av6uMgwiCBgUkPyn8"
					target="_blank"
					rel="noopener noreferrer"
					class="font-mono text-set-gray uppercase"
				>
					<p>104 Church St <br />Decatur, GA 30030<br /> USA</p>
				</a>
			</div>
		</div></Container
	>
</section>
