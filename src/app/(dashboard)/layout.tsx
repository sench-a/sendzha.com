import Link from 'next/link';
import { Nav } from '@/components/nav';
import { Icons } from '@/components/icons';

interface DashboardLayoutProps {
	children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
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
