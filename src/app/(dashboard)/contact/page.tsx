import { Icon, Icons } from '@/components/icons';
import { Plus } from '@/components/plus';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact',
	description: 'dev@sendzha.com',
};

const contact = [
	{
		type: 'Business email',
		label: 'dev@sendzha.com',
		href: 'mailto:dev@sendzha.com',
		icon: 'mail',
	},
	{
		type: 'Github',
		label: 'sench-a',
		href: 'https://github.com/sench-a',
		icon: 'github',
	},
	{
		icon: 'telegram',
		type: 'Telegram',
		label: '@aproskura1',
	},

	{
		icon: 'instagram',
		type: 'Instagram',
		href: 'https://instagram.com/sendzh.a',
		label: '@sendzh.a',
	},
];

export default function ContactPage() {
	return (
		<ul className="grid md:grid-cols-2 w-full gap-8 pb-8">
			{contact.map((link) => {
				const Icon = Icons[link.icon as Icon];

				return (
					<li
						key={link.label}
						className="relative animate-fade bg-card border"
					>
						<a
							href={link.href}
							target={link.href ?? 'blank'}
							className="p-10 flex flex-col items-center gap-3"
						>
							<Plus />

							<div
								className="absolute w-px h-2/3 bg-gradient-to-b from-muted-foreground to-transparent"
								aria-hidden="true"
							/>

							<div
								role="icon"
								className="relative z-10 flex items-center justify-center w-12 h-12 text-sm border border-muted-foreground bg-card rounded-full"
							>
								<Icon size={20} />
							</div>

							<h3
								className="z-10 font-medium drop-shadow-sm tracking-tight"
								style={{ fontSize: 'clamp(20px, 2.5vw, 24px)' }}
							>
								{link.label}
							</h3>

							<p
								className="text-center text-muted-foreground"
								style={{ fontSize: 'clamp(14px, 2.5vw, 16px)' }}
							>
								{link.type}
							</p>
						</a>
					</li>
				);
			})}
		</ul>
	);
}
