import groq from 'groq';
import { getClient } from '$lib/sanity.js';
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

export async function load({ cookies, params, setHeaders }) {
	const preview = cookies.get('preview') === '1';
	const client = getClient(preview);

	if (preview) setHeaders({ 'cache-control': 'no-store' });
	else setHeaders({ 'cache-control': 'public, max-age=60' });

	const doc = await client.fetch(q, { slug: params.slug });
	if (!doc) throw error(404, 'Not found');

	return { doc, preview };
}
