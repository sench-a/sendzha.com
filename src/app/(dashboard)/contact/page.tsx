import { siteConfig } from '@/config/site';
import type { Metadata } from 'next';

// ? Change OG and Twitter metadata
export const metadata: Metadata = {
	title: 'Contact',
	description: 'dev@sendzha.com',
};

export default function ContactPage() {
	return (
		<main className="grid w-full grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
			{siteConfig.links.map((link, index) => (
				<a
					key={index}
					href={link.href}
					target={link.href ?? 'blank'}
					className="p-4 sm:p-12 relative flex flex-col items-center gap-4 duration-500 border rounded-sm"
				>
					{/* GRADIENT LINE */}
					<span
						className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 to-transparent"
						aria-hidden="true"
					/>
					{/* CONTACT ICON */}
					<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-500 border border-zinc-500 rounded-full text-zinc-200 bg-zinc-900">
						{link.icon}
					</span>

					<div className="z-10 flex flex-col items-center">
						{/* CONTACT LABEL */}
						<h3 className="text-xl sm:text-2xl lg:text-3xl text-zinc-200 group-hover:text-white font-display font-medium duration-500">
							{link.label}
						</h3>
						{/* CONTACT TYPE */}
						<p className="mt-4 text-sm md:text-md lg:text-lg text-center text-zinc-500 group-hover:text-zinc-200 duration-500">
							{link.role}
						</p>
					</div>
				</a>
			))}
		</main>
	);
}
