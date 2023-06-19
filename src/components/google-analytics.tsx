'use client';

import { pageView } from '@/lib/gtag';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { useEffect } from 'react';

interface GoogleAnalyticsProps {
	GOOGLE_ANALYTICS_ID: string;
}

export default function GoogleAnalytics({
	GOOGLE_ANALYTICS_ID,
}: GoogleAnalyticsProps) {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		const url = pathname + searchParams.toString();
		pageView(GOOGLE_ANALYTICS_ID, url);
	}, [pathname, searchParams, GOOGLE_ANALYTICS_ID]);

	return (
		<>
			<Script
				src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
				strategy="worker"
			/>
			<Script
				id="google-analytics"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${GOOGLE_ANALYTICS_ID}', {
                        page_path: window.location.pathname
                    });
                `,
				}}
			/>
		</>
	);
}
