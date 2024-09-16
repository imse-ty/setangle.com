<script>
	import Header from '$lib/components/header.svelte';
	import '../app.css';
</script>

<div class="bg-background flex min-h-screen flex-col gap-8">
	<Header />
	<slot></slot>
</div>
