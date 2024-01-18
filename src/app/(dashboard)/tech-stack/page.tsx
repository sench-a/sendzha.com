import { Icon, Icons } from '@/components/icons';
import { Plus } from '@/components/plus';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Main Stack',
};

const tech = [
	{
		type: 'Framework',
		label: 'Next.js',
		icon: 'next',
	},
	{
		type: 'Language',
		label: 'TypeScript',
		icon: 'typescript',
	},
	{
		type: 'Styling',
		label: 'TailwindCSS',
		icon: 'tailwind',
	},

	{
		type: 'Cloud Platform',
		label: 'Vercel',
		icon: 'vercel',
	},
];

export default function TechStackPage() {
	return (
		<ul className="grid md:grid-cols-2 w-full gap-8 pb-8">
			{tech.map((item) => {
				const Icon = Icons[item.icon as Icon];

				return (
					<li
						key={item.label}
						className="relative animate-fade bg-card border p-10 flex flex-col items-center gap-3"
					>
						<Plus />

						<div
							className="absolute w-px h-[120px] bg-gradient-to-b from-muted-foreground to-transparent"
							aria-hidden="true"
						/>

						<div
							role="icon"
							className="relative z-10 flex items-center justify-center w-12 h-12 text-sm border border-muted-foreground bg-card rounded-full"
						>
							{item.icon === 'typescript' ? (
								<span className="font-bold text-lg">TS</span>
							) : (
								<Icon size={20} />
							)}
						</div>

						<h3
							className="z-10 font-medium drop-shadow-sm tracking-tight"
							style={{ fontSize: 'clamp(20px, 2.5vw, 24px)' }}
						>
							{item.label}
						</h3>

						<p
							className="text-center text-muted-foreground"
							style={{ fontSize: 'clamp(14px, 2.5vw, 16px)' }}
						>
							{item.type}
						</p>
					</li>
				);
			})}
		</ul>
	);
}
