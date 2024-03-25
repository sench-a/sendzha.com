import { Suspense } from 'react';
import { Nav } from '@/components/nav';
import { Particles } from '@/components/particles';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import type { LayoutProps } from '@/types';

export default function DashboardLayout({ children }: LayoutProps) {
	return (
		<>
			<VercelAnalytics />

			<Particles className="absolute inset-0 -z-10 opacity-80 select-none" />

			<header className="max-width-screen">
				<Suspense>
					<Nav />
				</Suspense>
			</header>

			<main className="max-width-screen">{children}</main>
		</>
	);
}
