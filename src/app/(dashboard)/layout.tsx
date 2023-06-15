import '../globals.css';
import BackButton from '@/components/back-button';
import Nav from '@/components/nav';
import { siteConfig } from '@/config/site';
import type { Metadata } from 'next';

interface DashboardLayoutProps {
	children: React.ReactNode;
}

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s | ${siteConfig.name}`,
	},
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
	return (
		<html>
			<body>
				<header className="px-4 xl:px-8 duration-500">
					<nav className="h-24 flex flex-row items-center justify-between">
						<BackButton />
						<Nav />
					</nav>
				</header>
				{children}
			</body>
		</html>
	);
}
