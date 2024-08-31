import { REVALIDATE_TIME } from '@/shared';
import { redirect } from 'next/navigation';

export const revalidate = REVALIDATE_TIME;

const MainPage = async () => {
	redirect('/ru');
};

export default MainPage;
