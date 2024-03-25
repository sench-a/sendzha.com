import type { SanityDocument, Image as SanityImage } from 'sanity';

export type LayoutProps = {
	children: React.ReactNode;
};

export type Image = SanityImage & {
	blurDataUrl: string; // https://nextjs.org/docs/app/api-reference/components/image#blurdataurl
};

export type Project = SanityDocument & {
	type: string;
	title: string;
	link: string;
	github?: string;
	image: Image;
	description: string;
	stack: Array<{ _key: string; title: string; description?: string }>;
};

export type Contact = SanityDocument & {
	items: ContactItem[];
};

export type ContactItem = { _key: string; title: string; type: string };
