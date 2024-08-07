import { MetaService } from '@/services/user/meta';
import { appLinks, WEBSITE_DOMEN } from '@/shared/constants';

// robots.txt / v.1.0.0
export default async function robots() {
	const pages = await MetaService.getRobots();

	if (!pages.data || pages.data.length === 0) {
		return {
			rules: [
				{
					userAgent: '*',
					allow: [`${appLinks.user.main}`],
					disallow: [`${appLinks.user.main}*?*`, '/admin'],
				},
			],
			sitemap: `${WEBSITE_DOMEN}/sitemap.xml`,
		};
	}

	return {
		rules: pages.data.map((page) => {
			return {
				userAgent: page.attributes.userAgent,
				allow: page.attributes.allow.map((page) => page.path),
				disallow: page.attributes.disallow?.map((page) => page.path),
			};
		}),
		sitemap: `${WEBSITE_DOMEN}/sitemap.xml`,
	};
}
