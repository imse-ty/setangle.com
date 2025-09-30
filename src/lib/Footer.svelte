<script>
	import ContactItem from './ContactItem.svelte';
	import Container from './Container.svelte';
	import { onMount } from 'svelte';

	let date = new Date();
	let hour, min, sec, dayOrNight;

	function updateTime() {
		const est = new Date(date.toLocaleString('en-US', { timeZone: 'America/New_York' }));
		hour = est.getHours();
		min = est.getMinutes();
		sec = est.getSeconds();
		dayOrNight = hour >= 12 ? 'PM' : 'AM';
	}

	onMount(() => {
		updateTime();
		const interval = setInterval(() => {
			date = new Date();
			updateTime();
		}, 1000);
	});
</script>

<footer id="contact" class="relative">
	<div class="h-[70vh] bg-neutral-900 xl:h-[40vh]"></div>

	<div id="contact" class="fixed bottom-0 h-[70vh] w-full bg-neutral-900 xl:h-[40vh]">
		<Container>
			<div class="flex h-full flex-col justify-between pt-8 pb-16 md:pt-16">
				<h2 class="font-display text-4xl font-medium uppercase md:text-6xl">
					<span class="text-set-gray">Lets</span> talk
				</h2>

				<div class="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-16">
					<ContactItem label="Email" href="mailto:greetings@setangle.com"
						>greetings@setangle.com</ContactItem
					>
					<ContactItem label="Phone" href="tel:+17706095007">+1 (770) 609-5007</ContactItem>
					<ContactItem label="Office" href="https://maps.app.goo.gl/Av6uMgwiCBgUkPyn8"
						>104 Church St,<br />Decatur, GA 30030</ContactItem
					>

					<div class="flex gap-4">
						<a
							class="font-mono text-sm uppercase"
							href="https://www.instagram.com/set_angle"
							target="_blank"
							rel="noopener noreferrer"
						>
							<button class="uppercase">Instagram</button></a
						>
						<a
							class="font-mono text-sm uppercase"
							href="https://www.linkedin.com/company/setangle"
							target="_blank"
							rel="noopener noreferrer"><button class="uppercase">LinkedIn</button></a
						>
					</div>

					<p class="font-mono text-sm uppercase sm:col-span-2 sm:col-start-2">
						Copyright © 2025 Set Angle. All&nbsp;rights&nbsp;reserved.
					</p>
				</div>
			</div>
		</Container>
	</div>
</footer>
