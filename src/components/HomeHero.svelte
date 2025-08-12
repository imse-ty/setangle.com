<script>
	import AngleLogo from '$lib/AngleLogo.svelte';
	import Container from '$lib/Container.svelte';
	import Header from '$lib/Header.svelte';
</script>

<Container>
	<div class="flex h-screen flex-col justify-between">
		<Header />
		<AngleLogo />
		<div class="flex flex-col gap-8">
			<h1 class="s font-display text-5xl font-medium tracking-tight lg:text-8xl xl:text-9xl">
				ANGLE is a motion <br /> <span class="text-set-gray">and</span> experience agency
			</h1>
			<div class="flex flex-col gap-4 md:flex-row md:items-center">
				<div class="flex">
					<button class="btn pl-0 font-mono font-normal uppercase btn-ghost">Play reel</button>
					<a href="https://cal.com/team/setangle/discuss" target="_blank" rel="noopener noreferrer">
						<button class="btn font-mono font-normal uppercase btn-ghost">Book a call</button>
					</a>
				</div>

				<div class="h-px flex-1 bg-set-gray"></div>

				<div class="font-mono uppercase">Atlanta,&nbsp;GA</div>
			</div>
		</div>
	</div>
</Container>
