'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/siteConfig';
import { LayoutGroup, motion } from 'framer-motion';
import { cn } from '@/lib/cn';

export default function Nav() {
	let pathname = usePathname();
	return (
		<nav className="fade relative -mx-3 flex flex-row items-center space-x-6 py-3">
			<LayoutGroup>
				{siteConfig.mainNav.map((nav, index) => {
					const isActiveRoute = nav.route === pathname;
					return !nav.isDisabled ? (
						<Link
							key={index}
							href={nav.route}
							className={cn(
								'flex items-center text-lg text-zinc-200 hover:text-white transition-all duration-500',
								isActiveRoute && 'text-black hover:text-black',
							)}
						>
							<span className="relative px-3 py-1">
								{nav.title}
								{nav.route === pathname ? (
									<motion.div
										className="absolute inset-0 z-[-1] rounded-md bg-white"
										layoutId="sidebar"
										transition={{
											type: 'spring',
											stiffness: 350,
											damping: 30,
										}}
									/>
								) : null}
							</span>
						</Link>
					) : (
						<></>
					);
				})}
			</LayoutGroup>
		</nav>
	);
}
