import Link from 'next/link';
import { Nav } from '@/components/nav';
import { Icons } from '@/components/icons';
import type { LayoutProps } from '@/types';

export default function DashboardLayout({ children }: LayoutProps) {
	return (
		<>
			<header className="px-4 max-w-screen-lg mx-auto">
				<nav className="py-8 flex flex-row items-center justify-between">
					<Link href="/">
						<div className="flex items-center gap-2 text-muted-foreground hover:text-primary duration-300">
							<Icons.back size="16" />
							<p>Back</p>
						</div>
					</Link>

					<Nav />
				</nav>
			</header>

			<main className="px-4 max-w-screen-lg mx-auto">{children}</main>
		</>
	);
}
