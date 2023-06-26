import { siteConfig } from '@/config/site';
import { cn } from '@/lib/cn';
import { pretendard } from '@/public/fonts/fonts';
import { NextPage } from 'next';
import Link from 'next/link';
import ReactWrapBalancer from 'react-wrap-balancer';

export default function HomePage() {
	return (
		<main className="h-screen">
			<section className="flex flex-col h-screen w-screen px-6 items-center justify-center">
				<div className="text-center">
					<div className="h-px animate-glow animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
					<h1 className="font-extrabold text-7xl sm:text-8xl lg:text-9xl animate-title text-edge-outline text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 via-white to-zinc-300 whitespace-nowrap">
						{siteConfig.name}
					</h1>
					<div className="h-px animate-glow animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
					<p
						className={cn(
							'mt-4 text-zinc-400 font-light tracking-wide animate-fade-in text-xl lg:text-2xl',
							pretendard.className,
						)}
					>
						<ReactWrapBalancer>
							{siteConfig.description}
						</ReactWrapBalancer>
					</p>

					<nav className="mt-8 flex flex-col items-center gap-4 animate-fade-in">
						{siteConfig.mainNav.map((nav, index) => (
							<Link
								key={index}
								href={nav.route}
								className="w-full p-[1px] text-xl lg:text-2xl duration-500 text-zinc-300 hover:text-white font-semibold bg-gradient-to-b from-white to-white/40 rounded-lg"
							>
								<p className="py-2.5 h-full w-full bg-black rounded-lg">
									{nav.title}
								</p>
							</Link>
						))}
					</nav>
				</div>
			</section>
		</main>
	);
}
