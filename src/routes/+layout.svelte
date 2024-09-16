<script>
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import '../app.css';
</script>

<div class="bg-background flex min-h-screen flex-col gap-8">
	<Header />
	<slot></slot>
	<Footer />
</div>
