// hooks.server.ts
import { createRequestHandler, setServerClient } from '@sanity/svelte-loader';
import { serverClient } from '$lib/server/sanity/client';
import { redirects } from '$lib/redirects';

setServerClient(serverClient);

const baseHandle = createRequestHandler();

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	// Force trailing slash
	// if (!event.url.pathname.endsWith('/')) {
	// 	event.url.pathname += '/';
	// }

	// Check for redirect
	const match = redirects.find((r) => r.source === event.url.pathname);

	if (match) {
		return new Response(null, {
			status: match.status ?? 302,
			headers: {
				location: match.destination
			}
		});
	}

	// Pass to @sanity/svelte-loader handler
	return baseHandle({ event, resolve });
}
