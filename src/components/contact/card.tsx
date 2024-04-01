'use client';

import { toast } from 'sonner';
import { Plus } from '@/components/plus';
import { Icons, type Icon } from '@/components/icons';
import { capitalize, cn } from '@/lib/utils';
import type { ContactItem } from '@/types';

type ContactCardProps = {
	item: ContactItem;
};

export const ContactCard = ({ item }: ContactCardProps) => {
	const Icon = Icons[item.type as Icon] ?? Icons.webhook;

	function copy(item: ContactItem): void {
		navigator.clipboard.writeText(item.title);

		toast(`${capitalize(item.type)} has been copied.`);
	}

	return (
		<li className="card">
			<div className="p-10 flex flex-col items-center gap-3">
				<Plus />

				<div
					className="absolute w-px h-[120px] bg-gradient-to-b from-muted-foreground to-transparent"
					aria-hidden="true"
				/>

				<div
					role="icon"
					className="relative z-10 flex items-center justify-center w-12 h-12 text-sm border border-muted-foreground bg-card rounded-full"
				>
					<Icon size={20} />
				</div>

				<div
					className="flex items-center gap-2 md:gap-2.5 cursor-pointer"
					onClick={() => copy(item)}
				>
					<h3
						className="z-10 font-medium drop-shadow-sm tracking-tight"
						style={{ fontSize: 'clamp(20px, 2.5vw, 24px)' }}
					>
						{item.title}
					</h3>

					<Icons.copy
						size={16}
						className={cn('text-muted-foreground')}
					/>
				</div>

				<p
					className="text-center text-muted-foreground capitalize"
					style={{ fontSize: 'clamp(14px, 2.5vw, 16px)' }}
				>
					{item.type}
				</p>
			</div>
		</li>
	);
};
