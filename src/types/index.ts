import type { SanityDocument, Image as SanityImage } from 'sanity';

export interface LayoutProps {
	children: React.ReactNode;
}

export interface Image extends SanityImage {
	blurDataUrl: string; // https://nextjs.org/docs/app/api-reference/components/image#blurdataurl
}

export interface Project extends SanityDocument {
	type: string;
	title: string;
	link: string;
	github?: string;
	image: Image;
	description: string;
	stack: Array<{ _key: string; title: string; description?: string }>;
}

export interface Contact extends SanityDocument {
	items: Array<{ _key: string; title: string; type: string }>;
}

export interface Config extends SanityDocument {
	title: string;
	subtitle: string;
	siteTitle: string;
}
