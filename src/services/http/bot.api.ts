import axios from 'axios';

export const $bot = axios.create({
	baseURL: `${process.env.NEXT_PUBLIC_BOT_URL}/api`,
});
