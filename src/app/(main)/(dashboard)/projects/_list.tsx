'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Plus } from '@/components/plus';
import { Icons } from '@/components/icons';
import { Badge } from '@/components/ui/badge';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { createSanityImageUrl } from '@/sanity/lib/image';
import { projectTypes } from '@/sanity/schemas/project';
import { siteConfig } from '@/config/site';
import { createUrl } from '@/lib/utils';
import type { Project } from '@/types';

type ProjectsListProps = {
	projects: Project[];
};

export const ProjectsList = ({ projects }: ProjectsListProps) => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const DEFAULT_TYPE = 'all';
	const SELECTED_TYPE = searchParams.get('type') ?? DEFAULT_TYPE;

	function handleSelect(value: string): void {
		// creating new variable since searchParams is read-only
		const params = new URLSearchParams(searchParams.toString());
		params.set('type', value);

		const url = createUrl(siteConfig.routes.projects, params.toString());

		router.replace(url);
	}

	const filteredProjects =
		SELECTED_TYPE !== 'all'
			? projects.filter((project) => project.type === SELECTED_TYPE)
			: projects;

	return (
		<div className="my-6 space-y-6">
			<div className="flex w-full justify-end">
				<Select
					value={SELECTED_TYPE}
					onValueChange={handleSelect}
					defaultValue={DEFAULT_TYPE}
				>
					<SelectTrigger className="w-fit gap-3 rounded-full font-semibold">
						<SelectValue defaultValue={DEFAULT_TYPE} />
					</SelectTrigger>

					<SelectContent>
						<SelectItem value="all">All projects</SelectItem>
						{projectTypes.map((type) => (
							<SelectItem
								key={type.value}
								value={type.value}
							>
								{type.title}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>

			<ul className="grid md:grid-cols-2 w-full gap-6">
				{filteredProjects.map((project) => (
					<ProjectCard
						key={project._id}
						project={project}
					/>
				))}
			</ul>

			{filteredProjects.length >= 3 ? (
				<div className="flex justify-end md:hidden">
					<ScrollToTopButton />
				</div>
			) : null}
		</div>
	);
};

const ProjectCard = ({ project }: { project: Project }) => {
	return (
		<li className="relative animate-fade flex flex-col gap-4 p-3 border bg-card/80 rounded-sm">
			<Plus />

			<AspectRatio ratio={16 / 9}>
				<Image
					src={createSanityImageUrl(project.image)}
					alt={`${project.title} website thumbnail`}
					className="bg-accent object-cover object-center border rounded-sm"
					sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw"
					blurDataURL={project.image.blurDataUrl}
					placeholder="blur"
					fill
				/>
			</AspectRatio>

			<div className="px-1 flex flex-col gap-2 h-fit">
				<div className="flex flex-row items-center justify-between">
					<h2 className="text-xl font-bold tracking-tight">{project.title}</h2>

					<div className="flex flex-row gap-2">
						<Link
							href={project.link}
							target="blank"
							className="flex h-9 px-3 animate-shimmer items-center justify-center rounded-full border-slate-800 text-primary-foreground text-sm bg-[linear-gradient(110deg,#FFF,45%,#F5F5F5,55%,#FFF)] bg-[length:200%_100%] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
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

const ScrollToTopButton = () => {
	const handleClick = (): void => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<button
			onClick={handleClick}
			className="h-12 w-12 flex items-center justify-center rounded-full shadow-sm duration-300 bg-background hover:bg-accent border text-primary"
			aria-label="Scroll to top button"
		>
			<Icons.chevronUp strokeWidth={1.75} />
		</button>
	);
};
