import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

export default function HomePage() {
	return (
		<section className="flex flex-col h-screen w-screen px-4 items-center justify-center">
			<main className="text-center">
				<div
					className="h-px animate-glow animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"
					aria-hidden="true"
				/>
				<h1
					className="font-bold tracking-tighter animate-title text-edge-outline text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 via-white to-zinc-300 whitespace-nowrap"
					style={{
						fontSize: 'clamp(64px, 10vw, 96px)',
					}}
				>
					{siteConfig.title}
				</h1>
				<div
					className="h-px animate-glow animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"
					aria-hidden="true"
				/>

				<h2
					className="mt-4 text-muted-foreground tracking-normal animate-fade-in"
					style={{ fontSize: 'clamp(16px, 2.5vw, 20px)' }}
				>
					{siteConfig.subtitle}
				</h2>

				<nav className="mt-8 space-y-4 animate-fade-in">
					{siteConfig.nav.map((nav, index) => {
						return (
							<Button
								key={nav.route}
								className={cn('last:border w-full', {
									'bg-primary hover:bg-white/80 text-black': !index,
								})}
								variant="ghost"
								size="lg"
								asChild
							>
								<Link href={nav.route}>{nav.title}</Link>
							</Button>
						);
					})}
				</nav>
			</main>
		</section>
	);
}
