import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId, useCdn } from '@/sanity/config/constants';

export const client = createClient({
	apiVersion,
	dataset,
	projectId,
	useCdn,
});
