import { env } from '@/env.mjs';

export const siteConfig = {
	title: 'sendzha',
	subtitle: 'On vacation in Java',
	site_title: 'sendzha | software engineer',
	url: env.NEXT_PUBLIC_URL,
	routes: {
		projects: '/projects',
		contact: '/contact',
	},
};

export const navigation = [
	{ title: 'Projects', route: siteConfig.routes.projects, disabled: false },
	{ title: 'Contact', route: siteConfig.routes.contact, disabled: false },
];
