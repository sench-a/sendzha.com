import { revalidatePath } from 'next/cache';
import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook';
import { env } from '@/env.mjs';

export async function POST(request: Request): Promise<Response> {
	if (request.method !== 'POST') {
		return new Response('Method not allowed', { status: 405 });
	}

	const body = await request.text();
	const signature = request.headers.get(SIGNATURE_HEADER_NAME) as string;

	const isSanitySignatureValid = await isValidSignature(
		body,
		signature,
		env.SANITY_WEBHOOK_SECRET,
	);

	if (!isSanitySignatureValid) {
		return new Response('Invalid signature', { status: 401 });
	}

	revalidatePath('/(main)', 'layout');

	return new Response(null, { status: 200 });
}
