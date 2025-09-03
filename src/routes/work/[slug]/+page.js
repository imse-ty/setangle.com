import groq from 'groq';
import { sanity } from '$lib/sanity';
import { error } from '@sveltejs/kit';

const q = groq`*[_type=="project" && slug.current==$slug][0]{
  _id, title, slug, publishedAt,
  cover{asset->, alt},
  videoUrl,
  subtitle,
  info,
  stats,
  body
}`;

export async function load({ params, setHeaders }) {
	const doc = await sanity.fetch(q, { slug: params.slug });
	if (!doc) throw error(404, 'Not found');
	setHeaders({ 'cache-control': 'public, max-age=60' });
	return { doc };
}
