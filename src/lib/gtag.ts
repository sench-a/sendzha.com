declare global {
	interface Window {
		gtag: any;
	}
}

export const pageView = (GOOGLE_ANALYTICS_ID: string, url: string) => {
	window.gtag('config', GOOGLE_ANALYTICS_ID, {
		page_path: url,
	});
};
