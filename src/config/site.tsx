import { Github, Mail } from 'lucide-react';
export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: 'Sendzha',
	description: 'I make sexy websites',
	url: 'https://sendzha.com',
	mainNav: [
		{
			title: 'Projects',
			route: '/projects',
		},
		{
			title: 'Contact',
			route: '/contact',
		},
	],
	links: [
		{
			icon: <Mail size={20} />,
			title: 'Business email',
			label: 'poulpawker@gmail.com',
		},
		{
			icon: <Github size={20} />,
			href: 'https://github.com/sench-a',
			title: 'Github',
			label: 'sench-a',
		},
	],
	projects: [
		{
			title: 'STP Service',
			link: 'https://stpservice.ee',
			description:
				'Full-stack website for a car repair service based in Tallinn, Estonia',
		},
	],
};
