'use client';

import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export const BackButton = () => {
	return (
		<Link href="/">
			<div className="flex items-center gap-2">
				<ChevronLeft
					size="16"
					color="gray"
				/>
				<p className="text-zinc-500 hover:text-white duration-500">Back</p>
			</div>
		</Link>
	);
};
