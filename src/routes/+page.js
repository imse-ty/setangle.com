import groq from 'groq';
import { sanity } from '$lib/sanity';

const q = groq`*[_type=="project"]|order(publishedAt desc){
  _id, title,subtitle, "slug": slug.current, cover{asset->, alt}
}`;

export async function load() {
	return { items: await sanity.fetch(q) };
}
