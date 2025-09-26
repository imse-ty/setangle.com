<script>
	import { urlFor } from './sanity/image';

	let { portableText } = $props();

	console.log(portableText);
</script>

<img
	src={urlFor(portableText.value.asset).width(1200).url()}
	alt={portableText.value.alt}
	loading="lazy"
/>
