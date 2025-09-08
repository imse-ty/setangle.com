import { redirect } from '@sveltejs/kit';
import { PREVIEW_SECRET } from '$env/static/private';

export async function GET({ url, cookies }) {
	if (url.searchParams.get('secret') !== PREVIEW_SECRET)
		return new Response('Invalid', { status: 401 });
	const redirectTo = url.searchParams.get('redirect') ?? '/';
	cookies.set('preview', '1', { path: '/', httpOnly: true, sameSite: 'lax' });
	throw redirect(302, redirectTo);
}
