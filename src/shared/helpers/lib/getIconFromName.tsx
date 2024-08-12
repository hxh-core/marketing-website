import { IIcons } from '@/shared/types/ui/shared';
import {
	ArrowIcon,
	BehanceIcon,
	CheckMarkIcon,
	DzenIcon,
	GitHubIcon,
	HabrIcon,
	InfoIcon,
	InstagramIcon,
	OkIcon,
	PenIcon,
	RobotIcon,
	SendIcon,
	TelegramIcon,
	VkIcon,
	WebsiteIcon,
	WhatsAppIcon,
	YandexIcon,
} from '@/shared/ui/icons';

const Icons = {
	Instagram: InstagramIcon,
	Telegram: TelegramIcon,
	VK: VkIcon,
	WhatsApp: WhatsAppIcon,
	Behance: BehanceIcon,
	OK: OkIcon,
	GitHub: GitHubIcon,
	Habr: HabrIcon,
	Website: WebsiteIcon,
	Arrow: ArrowIcon,
	Send: SendIcon,
	Info: InfoIcon,
	Robot: RobotIcon,
	Pen: PenIcon,
	CheckMark: CheckMarkIcon,
	Dzen: DzenIcon,
	Yandex: YandexIcon,
};

// 11.07.2024 / v.1.0.0
// Функция для получения иконки по имени
export const getIconFromName = (
	name: IIcons,
	className?: string,
	color?: 'dark' | 'light' | string,
): React.ReactNode => {
	if (!name) {
		const DefaultIcon = Icons['Website'];
		return <DefaultIcon className={className} color={color} />;
	}

	try {
		const Icon = Icons[name];
		if (Icon) {
			return <Icon className={className} color={color} />;
		}

		const DefaultIcon = Icons['Website'];
		return <DefaultIcon className={className} color={color} />;
	} catch (error) {
		const DefaultIcon = Icons['Website'];
		return <DefaultIcon className={className} color={color} />;
	}
};
