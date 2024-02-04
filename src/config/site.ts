import { env } from '@/env.mjs';

export const siteConfig = {
	title: 'sendzha',
	subtitle: 'I turn caffeine and pain into code',
	siteTitle: 'sendzha | Full-Stack Engineer',
	url: env.NEXT_PUBLIC_URL,
	nav: [
		{ title: 'Projects', route: '/projects' },
		{ title: 'Contact', route: '/contact' },
	],
};
