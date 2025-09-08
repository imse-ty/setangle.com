import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } from '$env/static/public';
import { SANITY_READ_TOKEN } from '$env/static/private';

export function getClient(preview = false) {
	return createClient({
		projectId: PUBLIC_SANITY_PROJECT_ID,
		dataset: PUBLIC_SANITY_DATASET || 'production',
		apiVersion: '2025-01-01',
		useCdn: !preview,
		token: preview ? SANITY_READ_TOKEN : undefined,
		perspective: preview ? 'previewDrafts' : 'published',
		stega: preview
	});
}

const builder = imageUrlBuilder(getClient(false));
export const urlFor = (src) => builder.image(src);
