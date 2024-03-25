import { Suspense } from 'react';
import { Nav } from '@/components/nav';
import type { LayoutProps } from '@/types';

export default function DashboardLayout({ children }: LayoutProps) {
	return (
		<>
			<header className="max-width-screen">
				<Suspense>
					<Nav />
				</Suspense>
			</header>

			<main className="max-width-screen">{children}</main>
		</>
	);
}
