import '../globals.css';
import { inter } from '@/lib/fonts';
import type { Metadata } from 'next';
import { Particles } from '@/components/particles';
import { siteConfig } from '@/config/siteConfig';

export const metadata: Metadata = {
	title: siteConfig.name,
	description: siteConfig.description,
	openGraph: {
		title: siteConfig.name,
		description: siteConfig.description,
		url: siteConfig.url,
		siteName: siteConfig.name,
		images: [
			{
				url: `${siteConfig.url}/og.png`,
				width: 1920,
				height: 1080,
			},
		],
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
				<Particles className="absolute inset-0 -z-10 opacity-80 select-none" />
				{children}
			</body>
		</html>
	);
}
