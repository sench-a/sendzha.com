import { client } from '@/sanity/lib/client';
import { Contact, Project, Config } from '@/types';
import { groq } from 'next-sanity';

export const sanityFetch = async <T>(query: string): Promise<T | never> => {
	try {
		return await client.fetch<T>(query);
	} catch (error: unknown) {
		throw error;
	}
};

export const getProjects = async (): Promise<Project[]> => {
	const query = groq`
		*[_type=='project'] | order(_createdAt asc) {
			...,
			image {
				...,      
				"blurDataUrl": asset -> metadata.lqip 
			}
		}
	`;

	return await sanityFetch<Project[]>(query);
};

export const getContact = async (): Promise<Contact> => {
	const query = groq`
		*[_type=='contact'][0]
	`;

	return await sanityFetch<Contact>(query);
};

export const getConfig = async (): Promise<Config> => {
	const query = groq`
		*[_type=='config'][0]
	`;

	return await sanityFetch<Config>(query);
};
