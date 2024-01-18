'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

export const Nav = () => {
	const pathname = usePathname();

	return (
		<nav className="fade relative flex flex-row items-center gap-4">
			{siteConfig.nav.map((nav) => {
				const isActiveRoute = nav.route === pathname;

				return (
					<Button
						key={nav.route}
						variant="ghost"
						className="relative px-3 py-2 text-base"
						asChild
					>
						<Link href={nav.route}>
							<p
								className={cn('z-10 tracking-tight', {
									'text-primary-foreground': isActiveRoute,
								})}
							>
								{nav.title}
							</p>

							{nav.route === pathname ? (
								<motion.div
									className="absolute inset-0 bg-primary rounded-full"
									layoutId="sidebar"
									transition={{
										type: 'spring',
										stiffness: 350,
										damping: 30,
									}}
								/>
							) : null}
						</Link>
					</Button>
				);
			})}
		</nav>
	);
};
