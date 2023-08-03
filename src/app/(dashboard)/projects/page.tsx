import { siteConfig } from '@/config/site';
import { Metadata } from 'next';
import { Link } from 'lucide-react';

export const metadata: Metadata = {
	title: 'Projects',
};

export default function ProjectsPage() {
	return (
		<div className="max-w-screen-2xl px-4 2xl:px-0 mx-auto duration-500">
			<div className="flex flex-col items-center">
				<main className="grid w-full grid-cols-1 sm:grid-cols-2 gap-8 mx-auto">
					{siteConfig.projects.map((project, index) => (
						<a
							key={index}
							href={project.link}
							target="_blank"
							className="relative flex flex-col gap-2 duration-700 group p-8 sm:p-12 border border-zinc-600 rounded-lg"
						>
							<span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-zinc-300/90 to-white">
								{/* PROJECT TITLE */}
								<div className="flex flex-r0w items-center gap-2">
									{project.title}
									<Link
										size="20"
										color="white"
									/>
								</div>
							</span>
							{/* PROJECT DESCRIPTION */}
							<span className="text-lg sm:text-xl text-transparent bg-clip-text bg-gradient-to-r from-zinc-300/90 to-white">
								{project.description}
							</span>
						</a>
					))}
				</main>
			</div>
		</div>
	);
}
