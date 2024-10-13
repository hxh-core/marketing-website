import { PageService } from '@/services/user';
import {
	generateCustomMetadata,
	getComponentFromBlockName,
	PageCheck,
} from '@/shared/helpers/lib';
import { ScrollComponent } from '@/shared/ui/helpers';
import type { Metadata } from 'next/types';

export const revalidate = 30;

export const generateMetadata = async ({
	params,
}: {
	params: { slug: string; path: string; path1: string };
}): Promise<Metadata> => {
	const page = await PageService.getPageData(
		`/${params.slug}/${params.path}/${params.path1}`,
	);

	return generateCustomMetadata({
		page: page.data[0],
		path: `${params.slug}/${params.path}/${params.path1}`,
	});
};

const SlugPage = async ({
	params,
}: {
	params: { slug: string; path: string; path1: string };
}) => {
	const pageData = await PageService.getPageData(
		`/${params.slug}/${params.path}/${params.path1}`,
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
