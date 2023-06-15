import client from '@mailchimp/mailchimp_marketing';
import { env } from '@/env.mjs';


export async function POST(req: Request) {
	const email = await req.json();

	try {
		
	} catch (error: any) {
		return new Response(`Error: ${error.message}`, { status: 400 });
	}

	return new Response('Success!', { status: 200 });
}
