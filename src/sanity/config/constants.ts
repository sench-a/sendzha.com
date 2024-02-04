import { env } from '@/env.mjs';

const apiVersion = env.NEXT_PUBLIC_SANITY_API_VERSION;
const dataset = env.NEXT_PUBLIC_SANITY_DATASET;
const projectId = env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const useCdn = false;

export { apiVersion, dataset, projectId, useCdn };
