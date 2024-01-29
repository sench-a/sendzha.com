export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: 'sendzha',
	title: 'sendzha | Full-Stack Engineer',
	description: 'I turn caffeine and pain into code',
	url: 'https://www.sendzha.com',
	nav: [
		{ title: 'Projects', route: '/projects' },
		{ title: 'Contact', route: '/contact' },
	],
};
