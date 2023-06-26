'use client';

import { pageView } from '@/lib/gtag';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { useEffect } from 'react';

interface GoogleAnalyticsProps {
	id: string;
}

export default function GoogleAnalytics({ id }: GoogleAnalyticsProps) {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		const url = pathname + searchParams.toString();
		pageView(id, url);
	}, [pathname, searchParams, id]);

	return (
		<>
			<Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} />
			<Script
				id="google-analytics"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${id}', {
                        page_path: window.location.pathname
                    });
                `,
				}}
			/>
		</>
	);
}
