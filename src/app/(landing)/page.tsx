import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	description: siteConfig.description,
};

export default function HomePage() {
	return (
		<section className="h-screen">
			<div className="flex flex-col h-screen w-screen px-6 items-center justify-center">
				<div className="text-center">
					<div className="h-px animate-glow animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
					<h1
						className="font-black animate-title text-edge-outline text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 via-white to-zinc-300 whitespace-nowrap"
						style={{
							fontSize: 'clamp(72px, 10vw, 128px)',
						}}
					>
						{siteConfig.name}
					</h1>
					<div className="h-px animate-glow animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

					<p className="mt-4 text-zinc-500 font-light tracking-wide animate-fade-in text-xl lg:text-2xl">
						{siteConfig.description}
					</p>

					<nav className="mt-8 flex flex-col items-center gap-4 animate-fade-in">
						{siteConfig.nav.map((nav, index) => (
							<Link
								key={nav.route}
								href={nav.route}
								className="w-full last:border rounded-sm"
							>
								<Button
									variant="ghost"
									className={cn('h-11 md:h-12 text-xl lg:text-2xl', {
										'bg-white hover:bg-white/80 text-black': index === 0,
									})}
								>
									{nav.title}
								</Button>
							</Link>
						))}
					</nav>
				</div>
			</div>
		</section>
	);
}
