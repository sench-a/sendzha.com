import { z } from 'zod';
import { createEnv } from '@t3-oss/env-nextjs';

export const env = createEnv({
	/*
	 * Serverside Environment variables, not available on the client.
	 * Will throw if you access these variables on the client.
	 */
	server: {
		SANITY_WEBHOOK_SECRET: z.string().min(1),
	},

	/*
	 * Environment variables available on the client (and server).
	 *
	 * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
	 */
	client: {
		NEXT_PUBLIC_URL: z.string().min(1),

		NEXT_PUBLIC_GOOGLE_ANALYTICS_ID: z.string().min(1),

		NEXT_PUBLIC_SANITY_PROJECT_ID: z.string().min(1),
		NEXT_PUBLIC_SANITY_DATASET: z.string().min(1),
		NEXT_PUBLIC_SANITY_API_VERSION: z.string().min(1),
	},

	/*
	 * Due to how Next.js bundles environment variables on Edge and Client,
	 * we need to manually destructure them to make sure all are included in bundle.
	 *
	 * 💡 You'll get type errors if not all variables from `server` & `client` are included here.
	 */
	runtimeEnv: {
		NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,

		NEXT_PUBLIC_GOOGLE_ANALYTICS_ID: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,

		NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
		NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
		NEXT_PUBLIC_SANITY_API_VERSION: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
		SANITY_WEBHOOK_SECRET: process.env.SANITY_WEBHOOK_SECRET,
	},
});
