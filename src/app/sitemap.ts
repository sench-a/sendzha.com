import { siteConfig } from '@/config/site';

export default async function sitemap() {
	const home = {
		url: siteConfig.url,
		lastModified: new Date().toISOString().split('T')[0],
	};
	const routes = siteConfig.mainNav.map((nav) => ({
		url: `${siteConfig.url}${nav.route}`,
		lastModified: new Date().toISOString().split('T')[0],
	}));
	return [home, ...routes];
}
