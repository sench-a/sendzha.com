import { Suspense } from 'react';
import { ProjectsList } from '@/components/project/list';
import { getProjects } from '@/sanity/lib';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Projects',
	description: 'Discover my projects',
};

export default async function ProjectsPage() {
	const projects = await getProjects();

	return (
		<Suspense>
			<ProjectsList projects={projects} />
		</Suspense>
	);
}
