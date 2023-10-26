import { Icons } from '@/components/icons';
export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: 'sendzha',
	title: 'sendzha | Design Engineer',
	description: 'I design and code sexy web apps',
	url: 'https://sendzha.com',
	nav: [
		{ title: 'Projects', route: '/projects' },
		{ title: 'Contact', route: '/contact' },
	],
	links: [
		{
			icon: <Icons.mail size={20} />,
			role: 'Business email',
			label: 'dev@sendzha.com',
		},
		{
			icon: <Icons.github size={20} />,
			href: 'https://github.com/sench-a',
			role: 'Github',
			label: 'sench-a',
		},
	],
	projects: [
		{
			title: 'STP Service',
			link: 'https://stpservice.ee/ee',
			description: 'Commercial website for an Estonian car repair service',
		},
		{
			title: 'Clouder Club',
			link: 'https://clouderclub.com/en/catering',
			description: 'Commercial website for an Estonian hookah brand',
		},
	],
};
