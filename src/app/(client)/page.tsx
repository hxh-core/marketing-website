import { PageService } from '@/services/user';
import { REVALIDATE_TIME } from '@/shared';
import {
	generateCustomMetadata,
	getComponentFromBlockName,
} from '@/shared/helpers/lib';
import { ScrollComponent } from '@/shared/ui/helpers';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next/types';

export const revalidate = REVALIDATE_TIME;

export const generateStaticParams = async () => {
	const pages = await PageService.getAllPagesData();

	const links = pages.data.map((page) => ({
		slug: page.attributes.path,
	}));

	return links;
};

export const generateMetadata = async (): Promise<Metadata> => {
	const page = await PageService.getPageData(`/`);

	return generateCustomMetadata({
		page: page.data[0],
		path: '/',
		type: 'website',
	});
};

const MainPage = async () => {
	const pageData = await PageService.getPageData('/');

	if (!pageData.data[0] || !pageData.data[0].attributes.path) {
		return notFound();
	}

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
							},
							index,
						),
					)}
			</ScrollComponent>
		</>
	);
};

export default MainPage;
