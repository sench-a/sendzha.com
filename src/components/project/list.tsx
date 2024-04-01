'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Icons } from '@/components/icons';
import { ProjectCard } from '@/components/project/card';
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

const ScrollToTopButton = () => {
	function handleClick(): void {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

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
