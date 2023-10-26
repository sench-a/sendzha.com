import Link from 'next/link';
import { Icons } from './icons';

export const BackButton = () => {
	return (
		<Link href="/">
			<div className="flex items-center gap-2 text-zinc-500 hover:text-white duration-300">
				<Icons.chevronLeft size="16" />
				<p>Back</p>
			</div>
		</Link>
	);
};
