import { Particles } from '@/components/particles';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import { siteConfig } from '@/config/site';
import { geist } from '@/styles/fonts';
import type { Metadata } from 'next';
import type { LayoutProps } from '@/types';
import '@/styles/globals.css';

export const metadata: Metadata = {
	metadataBase: new URL(siteConfig.url),
	title: {
		default: siteConfig.title,
		template: `%s | ${siteConfig.title}`,
	},
	description: siteConfig.description,
	openGraph: {
		title: siteConfig.title,
		description: siteConfig.description,
		url: siteConfig.url,
		siteName: siteConfig.name,
		images: {
			url: `${siteConfig.url}/opengraph-image.png`,
			width: 1920,
			height: 1080,
		},
		locale: 'en',
		type: 'website',
	},
	twitter: {
		title: siteConfig.title,
		description: siteConfig.description,
		card: 'summary_large_image',
		images: `${siteConfig.url}/opengraph-image.png`,
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
	applicationName: siteConfig.name,
	referrer: 'origin-when-cross-origin',
	colorScheme: 'dark',
};

export default function RootLayout({ children }: LayoutProps) {
	return (
		<html lang="en">
			<body className={geist.className}>
				<VercelAnalytics />
				<Particles className="absolute inset-0 -z-10 opacity-80 select-none" />
				{children}
			</body>
		</html>
	);
}
