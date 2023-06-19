import './globals.css';
import type { Metadata } from 'next';
import { inter } from '@/lib/fonts';
import { env } from '@/env.mjs';
import { siteConfig } from '@/config/site';
import { Particles } from '@/components/particles';
import GoogleAnalytics from '@/components/google-analytics';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
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
		images: [`${siteConfig.url}/opengraph-image.png`],
		creator: '@sendzha_',
		card: 'summary_large_image',
	},
	icons: {
		shortcut: '/favicon.ico',
	},
	keywords: ['Next.js', 'Vercel', 'Websites', 'Sexy', 'Full-stack'],
	authors: [
		{
			name: siteConfig.name,
			url: siteConfig.url,
		},
	],
	creator: siteConfig.name,
	metadataBase: new URL(siteConfig.url),
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<GoogleAnalytics
				GOOGLE_ANALYTICS_ID={env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}
			/>
			<body className={inter.className}>
				<VercelAnalytics />
				<Particles className="absolute inset-0 -z-10 opacity-80 select-none" />
				{children}
			</body>
		</html>
	);
}
