import { env } from '@/env.mjs';

export const siteConfig = {
	title: 'sendzha',
	subtitle: 'On vacation in Java',
	siteTitle: 'sendzha | Full-Stack Engineer',
	url: env.NEXT_PUBLIC_URL,
	nav: [
		{ title: 'Projects', route: '/projects', disabled: false },
		{ title: 'Contact', route: '/contact', disabled: false },
		{ title: 'Posts', route: '/blog', disabled: true },
	],
};
