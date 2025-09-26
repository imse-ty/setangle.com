<script>
	import { urlFor } from './sanity/image';

	let { portableText } = $props();
</script>

<img
	src={urlFor(portableText.value.asset).width(1200).url()}
	alt={portableText.value.alt}
	loading="lazy"
	class="w-full transition duration-500 hover:scale-102"
/>
