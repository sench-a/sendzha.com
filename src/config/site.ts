import { env } from '@/env.mjs';

export const siteConfig = {
	title: 'zarr',
	subtitle: 'In pursuit of 3 Michelin star code',
	site_title: 'zarr | software engineer',
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
