import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { Link } from 'lucide-react';
import { Icons } from '@/components/icons';

export const metadata: Metadata = {
	title: 'Projects',
	description: 'Discover my projects',
};

export default function ProjectsPage() {
	return (
		<main className="grid w-full max-w-2xl gap-16 mx-auto">
			<div className="space-y-4">
				{siteConfig.projects.map((project, index) => {
					if (project.disabled) return;

					return (
						<a
							key={index}
							href={project.link}
							target="_blank"
							className="relative flex flex-col gap-3 duration-500 group p-8 sm:p-12 text-zinc-200 border rounded-sm"
						>
							<div className="flex flex-r0w items-center gap-3">
								<p
									className="text-2xl font-black"
									style={{ fontSize: 'clamp(24px, 2.5vw, 36px)' }}
								>
									{project.title}
								</p>

								<Icons.link
									size="20"
									color="white"
								/>
							</div>

							<p
								className="text-zinc-500 whitespace-pre-wrap"
								style={{ fontSize: 'clamp(16px, 2.5vw, 20px)' }}
							>
								{project.description}
							</p>
						</a>
					);
				})}
			</div>
		</main>
	);
}
