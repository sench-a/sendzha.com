export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: 'sendzha',
	title: 'sendzha | Full-Stack Engineer',
	description: 'I turn caffeine and stress into code',
	url: 'https://www.sendzha.com',
	nav: [
		{ title: 'Projects', route: '/projects' },
		{ title: 'Contact', route: '/contact' },
	],
};
