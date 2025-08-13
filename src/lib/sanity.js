import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } from '$env/static/public';

export const sanity = createClient({
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET || 'production',
	apiVersion: '2025-01-01',
	useCdn: true
	// token: process.env.SANITY_TOKEN // only for drafts; use server routes if needed
});

const builder = imageUrlBuilder(sanity);
export const urlFor = (src) => builder.image(src);
