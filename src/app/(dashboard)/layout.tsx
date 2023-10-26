import { Nav } from '@/components/nav';
import { BackButton } from '@/components/back-button';

interface DashboardLayoutProps {
	children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
	return (
		<>
			<header className="px-4 max-w-screen-lg mx-auto">
				<nav className="h-32 flex flex-row items-center justify-between">
					<BackButton />
					<Nav />
				</nav>
			</header>
			<section className="px-4 max-w-screen-lg mx-auto">{children}</section>
		</>
	);
}
