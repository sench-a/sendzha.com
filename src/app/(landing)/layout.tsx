import '../globals.css';

interface LandingLayoutProps {
	children: React.ReactNode;
}

export default function LandingLayout({ children }: LandingLayoutProps) {
	return (
		<html lang="en">
			<head />
			<body>{children}</body>
		</html>
	);
}
