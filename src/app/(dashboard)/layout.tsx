import '@/style/globals.css';
import { Nav } from '@/components/nav';
import { BackButton } from '@/components/back-button';

interface DashboardLayoutProps {
	children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
	return (
		<div className="px-4">
			<header>
				<nav className="h-32 flex flex-row items-center justify-between max-w-screen-lg mx-auto">
					<BackButton />
					<Nav />
				</nav>
			</header>
			{children}
		</div>
	);
}
