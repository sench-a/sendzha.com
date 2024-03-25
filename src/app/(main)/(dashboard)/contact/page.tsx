import { Icon, Icons } from '@/components/icons';
import { Plus } from '@/components/plus';
import { getContact } from '@/sanity/lib';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact',
	description: "Let's connect",
};

export default async function ContactPage() {
	const contact = await getContact();

	return (
		<ul className="grid md:grid-cols-3 w-full gap-8 pb-8">
			{contact.items.map((item) => {
				const Icon = Icons[item.type as Icon] ?? Icons.webhook;

				return (
					<li
						key={item._key}
						className="relative animate-fade bg-card/80 border"
					>
						<div className="p-10 flex flex-col items-center gap-3">
							<Plus />

							<div
								className="absolute w-px h-[120px] bg-gradient-to-b from-muted-foreground to-transparent"
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
								{item.title}
							</h3>

							<p
								className="text-center text-muted-foreground capitalize"
								style={{ fontSize: 'clamp(14px, 2.5vw, 16px)' }}
							>
								{item.type}
							</p>
						</div>
					</li>
				);
			})}
		</ul>
	);
}
