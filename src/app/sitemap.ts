import { siteConfig, navigation } from '@/config/site';
import type { MetadataRoute } from 'next';

const date = new Date().toISOString().split('T')[0];

export default function sitemap(): MetadataRoute.Sitemap {
	const home = {
		url: siteConfig.url,
		lastModified: date,
	};

	const routes = navigation.map((nav) => ({
		url: `${siteConfig.url}${nav.route}`,
		lastModified: date,
	}));

	return [home, ...routes];
}
