'use client';

import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Plus } from '@/components/plus';
import { Icons } from '@/components/icons';
import { Badge } from '@/components/ui/badge';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { createSanityImageUrl } from '@/sanity/lib/image';
import type { Project } from '@/types';

type ProjectCardProps = {
	project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
	return (
		<li className="card p-3">
			<Plus />

			<AspectRatio ratio={16 / 9}>
				<Image
					src={createSanityImageUrl(project.image)}
					alt={`${project.title} website Open Graph image`}
					className="bg-accent object-cover object-center border rounded-sm"
					sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw"
					blurDataURL={project.image.blurDataUrl}
					placeholder="blur"
					fill
				/>
			</AspectRatio>

			<div className="mt-3 px-1 flex flex-col gap-2 h-fit">
				<div className="flex flex-row items-center justify-between">
					<h2 className="text-xl font-bold tracking-tight">{project.title}</h2>

					<div className="flex flex-row gap-2">
						<Link
							href={project.link}
							target="blank"
							className="flex h-9 px-3 animate-shimmer items-center justify-center rounded-full border-slate-800 text-primary-foreground text-sm bg-[linear-gradient(110deg,#FFF,45%,#F5F5F5,55%,#FFF)] bg-[length:200%_100%] hover:bg-black font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
						>
							Visit
						</Link>

						{project.github ? (
							<Link
								href={project.github}
								target="blank"
								className="flex items-center justify-center border rounded-full h-9 w-9 hover:bg-border"
							>
								<Icons.github size={18} />
							</Link>
						) : null}
					</div>
				</div>

				<p className="text-sm text-muted-foreground">{project.description}</p>

				<TooltipProvider>
					<div className="mt-4 flex flex-wrap flex-row gap-1.5">
						{project.stack.map((item) => (
							<Tooltip key={item._key}>
								<TooltipTrigger asChild>
									<div>
										<Badge variant="secondary">{item.title}</Badge>
									</div>
								</TooltipTrigger>

								{item.description ? (
									<TooltipContent>
										<p>{item.description}</p>
									</TooltipContent>
								) : null}
							</Tooltip>
						))}
					</div>
				</TooltipProvider>
			</div>
		</li>
	);
};
