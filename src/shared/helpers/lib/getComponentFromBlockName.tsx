import type { IComponentMap, IComponentProps } from '@/shared/types/ui/blocks';
import {
	AccordionBlock,
	Advantages,
	CollectForm,
	CollectLinkLarge,
	CollectLinkMini,
	ServiceBlock,
	TeamBlock,
	TitleWithButtons,
	WorkCardsMini,
} from '@/widgets/ui/blocks';
import { WorkCardLarge } from '@/widgets/ui/elements';
import { isPropsValid } from './isPropsValid';

const components: IComponentMap = {
	'title-with-buttons': TitleWithButtons,
	'accordion-block': AccordionBlock,
	'team-block': TeamBlock,
	'form-block': CollectForm,
	'services-block': ServiceBlock,
	'works-mini-block': WorkCardsMini,
	'works-large-block': WorkCardLarge,
	'collect-link-mini': CollectLinkMini,
	'collect-link-large': CollectLinkLarge,
	'advantages-block': Advantages,
};

export const getComponentFromBlockName = (
	blockName: keyof typeof components,
	props: IComponentProps,
	index: number,
): React.ReactNode | null => {
	const Component = components[blockName];
	if (Component) {
		if (isPropsValid(props, props)) {
			return <Component {...props} key={index} />;
		} else {
			console.error(`Invalid props for block "${blockName}"`);
			return null;
		}
	} else {
		console.error(`Unknown block "${blockName}"`);
		return null;
	}
};
