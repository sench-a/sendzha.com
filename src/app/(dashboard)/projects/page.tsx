import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { Link } from 'lucide-react';

export const metadata: Metadata = {
	title: 'Projects',
	description: 'Discover my projects',
};

export default function ProjectsPage() {
	return (
		<section className="h-screen">
			<main className="grid w-full max-w-2xl gap-16 mx-auto">
				<div className="space-y-4">
					{siteConfig.projects.map((project, index) => {
						if (project.disabled) return;

						return (
							<a
								key={index}
								href={project.link}
								target="_blank"
								className="relative flex flex-col gap-2 duration-700 group p-8 sm:p-12 text-zinc-200 border border-zinc-600 rounded-lg"
							>
								<div className="flex flex-r0w items-center gap-2">
									<p className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
										{project.title}
									</p>
									<Link
										size="20"
										color="white"
									/>
								</div>

								<p className="text-md sm:text-xl whitespace-pre-wrap">
									{project.description}
								</p>
							</a>
						);
					})}
				</div>
			</main>
		</section>
	);
}
