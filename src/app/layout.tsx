import { Metadata } from 'next';
import { Particles } from '@/components/particles';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import { siteConfig } from '@/config/site';
import { Inter } from 'next/font/google';
import '@/style/globals.css';

export const metadata: Metadata = {
	metadataBase: new URL(siteConfig.url),
	title: {
		default: siteConfig.name,
		template: `%s | ${siteConfig.name}`,
	},
	description: siteConfig.description,
	openGraph: {
		title: siteConfig.name,
		description: siteConfig.description,
		url: siteConfig.url,
		siteName: siteConfig.name,
		locale: 'en',
		type: 'website',
	},
	twitter: {
		title: siteConfig.name,
		description: siteConfig.description,
		card: 'summary_large_image',
	},
	icons: {
		icon: '/favicon.ico',
		shortcut: ['/favicon-16x16.png', '/favicon-32x32.png'],
		apple: '/apple-touch-icon.png',
	},
	manifest: `${siteConfig.url}/site.webmanifest`,
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	verification: {
		google: 'google',
	},
	keywords: ['Next.js', 'Vercel', 'Web', 'Apps', 'Sexy', 'Full-stack'],
	authors: [
		{
			name: siteConfig.name,
			url: siteConfig.url,
		},
	],
	category: 'portfolio',
	creator: siteConfig.name,
	publisher: siteConfig.name,
	generator: 'Next.js',
	applicationName: 'Next.js',
	referrer: 'origin-when-cross-origin',
	colorScheme: 'dark',
};

export const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
});

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<VercelAnalytics />
				<Particles className="absolute inset-0 -z-10 opacity-80 select-none" />
				{children}
			</body>
		</html>
	);
}
