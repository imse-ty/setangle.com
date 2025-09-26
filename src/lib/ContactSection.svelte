<script>
	import Container from './Container.svelte';
</script>

<section id="contact" class="h-screen">
	<Container>
		<div class="flex h-full flex-col justify-between py-32">
			<h2 class="font-display text-9xl font-medium uppercase">
				<span class="text-set-gray">Lets</span> talk
			</h2>
			<div class="flex flex-col gap-8">
				<p class="text-2xl text-set-gray">
					We help brands shine by creating soulful animated visuals for marketing campaigns and
					events.
				</p>
				<div class="flex h-32 flex-col md:flex-row">
					<a
						class="btn h-full flex-1 font-mono font-normal btn-outline"
						href="https://cal.com/team/setangle/discuss"
						target="_blank"
						rel="noopener noreferrer"
					>
						<button class="uppercase">Book a call</button></a
					>
					<a
						class="btn h-full flex-1 font-mono font-normal btn-outline"
						href="mailto:greetings@setangle.com"
					>
						<button class="uppercase">Send an email</button></a
					>
				</div>
			</div>
		</div>
	</Container>
</section>
