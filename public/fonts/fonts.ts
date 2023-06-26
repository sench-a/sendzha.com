import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

export const pretendard = localFont({
	src: '/pretendard.ttf',
	display: 'swap',
});

export const inter = Inter({
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '500', '600', '700', '800', '900'],
});
