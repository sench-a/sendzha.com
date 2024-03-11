import Link from 'next/link';
import { Icons } from '@/components/icons';

export const BackButton = () => {
	return (
		<Link href="/">
			<div className="flex items-center gap-1 text-muted-foreground hover:text-primary duration-300">
				<Icons.back size="16" />
				<p className="text-sm">Back</p>
			</div>
		</Link>
	);
};
