import { PageService } from '@/services/user';
import { REVALIDATE_TIME } from '@/shared';
import {
	generateCustomMetadata,
	getComponentFromBlockName,
	PageCheck,
} from '@/shared/helpers/lib';
import { ScrollComponent } from '@/shared/ui/helpers';
import type { Metadata } from 'next/types';

export const revalidate = REVALIDATE_TIME;

export const generateStaticParams = async () => {
	const pages = await PageService.getAllPagesData();

	const links = pages.data.map((page) => ({
		slug: page.attributes.path,
	}));

	return links;
};

export const generateMetadata = async ({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> => {
	const page = await PageService.getPageData(`/${params.slug}`);

	return generateCustomMetadata({
		page: page.data[0],
		path: params.slug,
	});
};

const SlugPage = async ({ params }: { params: { slug: string } }) => {
	const pageData = await PageService.getPageData(
		params.slug === 'favicon.ico' || params.slug === ''
			? '/'
			: `/${params.slug}`,
	);

	PageCheck.isPageHasError(pageData);

	return (
		<>
			<ScrollComponent>
				{pageData.data[0] &&
					pageData.data[0].attributes.blocks &&
					pageData.data[0].attributes.blocks.map((block, index) =>
						getComponentFromBlockName(
							block.blockName,
							{
								data: block,
								index,
							},
							index,
						),
					)}
			</ScrollComponent>
		</>
	);
};

export default SlugPage;
