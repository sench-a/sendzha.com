'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { navigation } from '@/config/site';
import { cn, createUrl } from '@/lib/utils';

export const Nav = () => {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	return (
		<nav className="py-6 gap-6 flex flex-row items-center justify-between">
			<Link href="/">
				<div className="flex items-center gap-1 text-muted-foreground hover:text-primary duration-300">
					<Icons.back size="16" />
					<p className="text-sm">Back</p>
				</div>
			</Link>

			<div className="fade relative flex flex-row items-center gap-3">
				{navigation.map((nav) => {
					const isActiveRoute = nav.route === pathname;

					if (nav.disabled) {
						return null;
					}

					return (
						<Button
							key={nav.route}
							variant="ghost"
							className="relative px-3 py-2 text-base"
							asChild
						>
							<Link href={createUrl(nav.route, searchParams.toString())}>
								<p
									className={cn('z-10 tracking-tight', {
										'text-primary-foreground': isActiveRoute,
									})}
								>
									{nav.title}
								</p>

								{isActiveRoute ? (
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
			</div>
		</nav>
	);
};
