import { siteConfig } from '@/config/site';
import { Metadata } from 'next';
import { Link } from 'lucide-react';
import { ProjectCard } from '@/components/project-card';

export const metadata: Metadata = {
	title: 'Projects',
};

export default function ProjectsPage() {
	return (
		<div className="px-4">
			<main className="grid w-full max-w-2xl gap-16 mx-auto">
				<div className="space-y-4">
					<h2 className="text-3xl md:text-4xl text-white font-bold indent-4 duration-500">
						Personal Projects
					</h2>
					{siteConfig.projects
						.filter((project) => project.id === 'personal')
						.map((project, index) => (
							<ProjectCard
								key={index}
								className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500/90 to-yellow-300 border-yellow-600"
								link={project.link}
								title={project.title}
								description={project.description}
							/>
						))}
				</div>

				<div className="space-y-4">
					<h2 className="text-3xl md:text-4xl text-white font-bold indent-4 duration-500">
						Freelance Projects
					</h2>
					{siteConfig.projects
						.filter((project) => project.id === 'freelance')
						.map((project, index) => (
							<ProjectCard
								key={index}
								className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300/90 to-white"
								link={project.link}
								title={project.title}
								description={project.description}
							/>
						))}
				</div>
			</main>
		</div>
	);
}
