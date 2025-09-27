<script>
	import Container from './Container.svelte';
</script>

<footer class="bg-black">
	<Container>
		<div class="flex flex-col gap-4 py-6 md:flex-row md:items-center">
			<p class="font-mono uppercase">Copyright © 2025 Set Angle. All rights reserved.</p>
			<div class="h-px flex-1 bg-set-gray"></div>
			<div class="flex gap-4">
				<a
					class="btn cursor-pointer p-0 font-mono font-normal uppercase btn-ghost"
					href="https://www.instagram.com/set_angle"
					target="_blank"
					rel="noopener noreferrer"
				>
					<button class="uppercase">Instagram</button></a
				>
				<a
					class="btn cursor-pointer p-0 font-mono font-normal uppercase btn-ghost"
					href="https://www.linkedin.com/company/setangle"
					target="_blank"
					rel="noopener noreferrer"><button class="uppercase">LinkedIn</button></a
				>
			</div>
		</div>
	</Container>
</footer>
