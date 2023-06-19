import { siteConfig } from '@/config/site';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
	title: 'Contact',
};

export default function ContactPage() {
	return (
		<div className="container px-4 mx-auto">
			<div className="flex flex-col items-center">
				<main className="grid w-full grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-16 mx-auto">
					{siteConfig.links.map((link, index) => (
						<a
							key={index}
							href={link.href ?? ''}
							target="_blank"
							className="p-4 sm:p-12 relative flex flex-col items-center gap-4 duration-700 border border-zinc-600 rounded-lg"
						>
							<span
								className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
								aria-hidden="true"
							/>
							<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
								{link.icon}
							</span>{' '}
							<div className="z-10 flex flex-col items-center">
								<span className="text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
									{link.label}
								</span>
								<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
									{link.title}
								</span>
							</div>
						</a>
					))}
				</main>
			</div>
		</div>
	);
}
