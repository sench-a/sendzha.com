import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import type { Contact, Project } from '@/types';

export async function sanityFetch<T>(query: string): Promise<T | never> {
	try {
		return await client.fetch<T>(query);
	} catch (error: unknown) {
		throw error;
	}
}

export async function getProjects(): Promise<Project[]> {
	const query = groq`
		*[_type=='project'] | order(_createdAt desc) {
			...,
			image {
				...,      
				"blurDataUrl": asset -> metadata.lqip 
			}
		}
	`;

	return await sanityFetch<Project[]>(query);
}

export async function getContact(): Promise<Contact> {
	const query = groq`
		*[_type=='contact'][0]
	`;

	return await sanityFetch<Contact>(query);
}
