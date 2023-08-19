import Script from 'next/script';
import { env } from '@/env.mjs';

export async function GoogleAnalytics() {
	return (
		<>
			<Script id="google-analytics">
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
			
					gtag('config', '${env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
				`}
			</Script>
			<Script
				src={`https://www.googletagmanager.com/gtag/js?id=${env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
			/>
		</>
	);
}
