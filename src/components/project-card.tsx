import { cn } from '@/lib/cn';
import { Link } from 'lucide-react';

interface ProjectCardProps {
	link: string;
	title: string;
	description: string;
	className?: string;
}

export const ProjectCard = ({
	link,
	title,
	description,
	className,
}: ProjectCardProps) => {
	return (
		<a
			href={link}
			target="_blank"
			className={cn(
				'relative flex flex-col gap-2 duration-700 group p-8 sm:p-12 border border-zinc-600 rounded-lg',
				className,
			)}
		>
			<div className="flex flex-r0w items-center gap-2">
				<p className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
					{title}
				</p>
				<Link
					size="20"
					color="white"
				/>
			</div>

			<p className="text-lg sm:text-xt">{description}</p>
		</a>
	);
};
