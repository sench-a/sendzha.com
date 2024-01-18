import localFont from 'next/font/local';

export const geist = localFont({
	src: [
		{ path: './geist/regular.otf', weight: '400' },
		{ path: './geist/medium.otf', weight: '500' },
		{ path: './geist/semibold.otf', weight: '600' },
		{ path: './geist/bold.otf', weight: '700' },
		{ path: './geist/black.otf', weight: '800' },
		{ path: './geist/ultrablack.otf', weight: '900' },
	],
	display: 'swap',
});
