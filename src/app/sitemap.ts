import { siteConfig } from '@/config/site';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
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
