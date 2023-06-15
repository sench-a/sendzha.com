import { Inter, Playfair_Display } from 'next/font/google';

export const playfair_display = Playfair_Display({
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '500', '700', '900'],
});

export const inter = Inter({
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '500', '600', '700', '800', '900'],
});
