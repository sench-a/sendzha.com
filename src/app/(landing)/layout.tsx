import '../globals.css';
import { inter } from '@/lib/fonts';
import type { Metadata } from 'next';
import { Particles } from '@/components/particles';
import { siteConfig } from '@/config/site';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';
import { env } from '@/env.mjs';

export const metadata: Metadata = {
	title: siteConfig.name,
	description: siteConfig.description,
	openGraph: {
		title: siteConfig.name,
		description: siteConfig.description,
		url: siteConfig.url,
		siteName: siteConfig.name,
		locale: 'en',
		type: 'website',
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
			<body className={inter.className}>
				<Analytics />
				<Particles className="absolute inset-0 -z-10 opacity-80 select-none" />
				{children}

				<Script
					src={`https://www.googletagmanager.com/gtag/js?id=${env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
					strategy="afterInteractive"
				/>
				<Script
					id="google-analytics"
					strategy="afterInteractive"
				>
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){window.dataLayer.push(arguments);}
						gtag('js', new Date());

						gtag('config', ${env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID});
					`}
				</Script>
			</body>
		</html>
	);
}
