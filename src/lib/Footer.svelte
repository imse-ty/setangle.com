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
	<div class="h-[90vh] bg-neutral-900 sm:h-[70vh] xl:h-[40vh]"></div>

	<div id="contact" class="fixed bottom-0 h-[90vh] w-full bg-neutral-900 sm:h-[70vh] xl:h-[40vh]">
		<Container>
			<div class="flex h-full flex-col justify-between pt-8 pb-16 md:pt-16">
				<h2 class="font-display text-4xl font-medium uppercase md:text-6xl">
					<span class="text-set-gray">Lets</span> talk
				</h2>

				<div class="flex flex-col gap-8 sm:gap-16">
					<div class="mb-4 flex flex-col justify-between gap-8 sm:mb-0 sm:flex-row sm:gap-16">
						<ContactItem label="Email" href="mailto:greetings@setangle.com"
							>greetings@setangle.com</ContactItem
						>
						<ContactItem label="Phone" href="tel:+17706095007">+1 (770) 609-5007</ContactItem>
						<ContactItem
							label="Office"
							href="https://maps.app.goo.gl/Av6uMgwiCBgUkPyn8"
							isExternalLink>104 Church St,<br />Decatur, GA 30030</ContactItem
						>
					</div>

					<div class="flex flex-col justify-between gap-8 sm:flex-row sm:gap-4">
						<div class="flex gap-4">
							<a
								class="border-b-1 font-mono text-sm uppercase transition-colors duration-300 hover:text-set-gray"
								href="https://www.instagram.com/set_angle"
								target="_blank"
								rel="noopener noreferrer"
							>
								Instagram</a
							>
							<a
								class="b border-b-1 font-mono text-sm uppercase transition-colors duration-300 hover:text-set-gray"
								href="https://www.linkedin.com/company/setangle"
								target="_blank"
								rel="noopener noreferrer">LinkedIn</a
							>
						</div>

						<p class="font-mono text-sm uppercase sm:text-right">
							Copyright © 2025 Set Angle. All&nbsp;rights&nbsp;reserved.
						</p>
					</div>
				</div>
			</div>
		</Container>
	</div>
</footer>
