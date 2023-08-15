import '@/style/globals.css';
import BackButton from '@/components/back-button';
import Nav from '@/components/nav';

interface DashboardLayoutProps {
	children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
	return (
		<>
			<header className="px-4 xl:px-8 duration-500">
				<nav className="h-32 flex flex-row items-center justify-between max-w-screen-lg mx-auto">
					<BackButton />
					<Nav />
				</nav>
			</header>
			{children}
		</>
	);
}
