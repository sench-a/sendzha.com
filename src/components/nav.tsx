'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutGroup, motion } from 'framer-motion';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

export const Nav = () => {
	const pathname = usePathname();
	return (
		<div className="fade relative flex flex-row items-center space-x-6 py-3">
			<LayoutGroup>
				{siteConfig.nav.map((nav) => {
					const isActiveRoute = nav.route === pathname;
					return (
						<Link
							key={nav.route}
							href={nav.route}
							className="flex items-center text-base md:text-lg text-zinc-200"
						>
							<Button
								variant="ghost"
								className="relative px-3 py-1"
							>
								<p className={cn('z-10', { 'text-black': isActiveRoute })}>
									{nav.title}
								</p>
								{nav.route === pathname ? (
									<motion.div
										className="absolute inset-0 bg-white rounded-sm"
										layoutId="sidebar"
										transition={{
											type: 'spring',
											stiffness: 350,
											damping: 30,
										}}
									/>
								) : null}
							</Button>
						</Link>
					);
				})}
			</LayoutGroup>
		</div>
	);
};
