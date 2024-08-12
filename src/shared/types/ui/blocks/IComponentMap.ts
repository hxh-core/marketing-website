import type { IAccordionBlockProps } from './IAccordionBlockProps';
import { IAdvantagesBlockProps } from './IAdvantagesBlockProps';
import { ICollectDataFormBlockProps } from './ICollectDataFormBlockProps';
import { ICollectLinkLargeBlockProps } from './ICollectLinkLargeBlockProps';
import { ICollectLinkMiniBlockProps } from './ICollectLinkMiniBlockProps';
import { IServiceBlockProps } from './IServicesProps';
import type { ITeamBlockProps } from './ITeamBlockProps';
import type { ITitleWithButtonsProps } from './ITitleWithButtons';
import { IWorksMiniProps } from './IWorksProps';

export interface IComponentMap {
	[key: string]: React.ComponentType<any>;
}
export interface IComponentProps {
	index: number;
	data:
		| ITitleWithButtonsProps
		| IAccordionBlockProps
		| ITeamBlockProps
		| ICollectDataFormBlockProps
		| IAdvantagesBlockProps
		| IServiceBlockProps
		| IWorksMiniProps
		| ICollectLinkLargeBlockProps
		| ICollectLinkMiniBlockProps;
}
