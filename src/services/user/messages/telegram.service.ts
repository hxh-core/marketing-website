import { $bot, $server } from '@/services/http';
import { getClientValuesFromForm } from '@/shared/helpers/lib';
import { IAdminMessage, ICollectDataFormBlockProps } from '@/shared/types';

const BOT_URL = process.env.NEXT_PUBLIC_BOT_URL;

interface ClientValues {
	[key: string]: string;
}

// 12.07.2024 / v.1.0.0
// Сервис для отправки сообщений в Telegram
export class TelegramService {
	// Сообщение о неопубликованном блоке
	static async sendNotPublishedBlock(blockName: string) {
		if (!BOT_URL) {
			return;
		}

		await $server.post(BOT_URL, {
			message: `Блок [${blockName}] добавлен в страницу, но не опубликован.`,
		});
	}

	// Сообщение об оставленной заявке
	static async sendNewClient(
		form: ICollectDataFormBlockProps,
		client: ClientValues,
	) {
		if (!BOT_URL) {
			return;
		}

		const clientValues = getClientValuesFromForm(form, client);

		const message: IAdminMessage = {
			title: '<b>Новая заявка с сайта!</b>',
			text: {
				'Название блока': form.data.data.attributes.uniqueBlockName,
				'Заголовок формы': form.data.data.attributes.title,
				...clientValues,
			},
		};

		return await $bot.post<boolean>('/bot/send-admin-message', message);
	}
}
