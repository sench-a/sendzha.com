import Link from 'next/link';
import type { Metadata } from 'next';
import ReactWrapBalancer from 'react-wrap-balancer';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/cn';

export const metadata: Metadata = {
	description: siteConfig.description,
};

export default function HomePage() {
	return (
		<section className="h-screen">
			<div className="flex flex-col h-screen w-screen px-6 items-center justify-center">
				<div className={cn('text-center')}>
					<div className="h-px animate-glow animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
					<h1 className="font-extrabold text-7xl sm:text-8xl lg:text-9xl animate-title text-edge-outline text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 via-white to-zinc-300 whitespace-nowrap">
						{siteConfig.name}
					</h1>
					<div className="h-px animate-glow animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
					<p className="mt-4 text-zinc-400 font-light tracking-wide animate-fade-in text-xl lg:text-2xl">
						<ReactWrapBalancer>{siteConfig.description}</ReactWrapBalancer>
					</p>

					<nav className={cn('mt-8 flex flex-col items-center gap-4 animate-fade-in')}>
						{siteConfig.mainNav.map((nav, index) => (
							<Link
								key={index}
								href={nav.route}
								className="w-full py-2.5 text-xl lg:text-2xl first:bg-white first:hover:bg-white/90 first:text-black first:hover:text-black text-white hover:text-zinc-300 border border-white hover:border-zinc-300 font-semibold rounded-lg duration-500"
							>
								{nav.title}
							</Link>
						))}
					</nav>
				</div>
			</div>
		</section>
	);
}
