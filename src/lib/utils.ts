import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function createUrl(pathname: string, searchParams: string): string {
	const searchQuery = `${searchParams.length ? '?' : ''}${searchParams}`;

	return `${pathname}${searchQuery}`;
}

export function capitalize(input: string) {
	return input.charAt(0).toUpperCase() + input.slice(1);
}
