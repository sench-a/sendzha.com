import type { SanityDocument, Image as SanityImage, Slug } from 'sanity';

export interface LayoutProps {
	children: React.ReactNode;
}

export interface Image extends SanityImage {
	blurDataUrl: string; // https://nextjs.org/docs/app/api-reference/components/image#blurdataurl
}

export interface Project extends SanityDocument {
	title: string;
	link: string;
	image: Image;
	description: string;
	stack: Array<{ key: string; title: string; link: string }>;
}

export interface Contact extends SanityDocument {
	items: Array<{ key: string; title: string; type: string }>;
}

export interface Config extends SanityDocument {
	title: string;
	subtitle: string;
	siteTitle: string;
}
