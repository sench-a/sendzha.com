import Image from 'next/image';
import { Plus } from '@/components/plus';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Projects',
	description: 'Discover my projects',
};

const projects = [
	{
		title: 'Ligne Roset Estonia',
		link: 'https://www.ligneroset-estonia.ee',
		image: '/projects/ligne-roset-estonia.png',
	},
	{
		title: 'useTransition',
		link: 'https://www.usetransition.com',
		image: '/projects/usetransition.png',
	},
	{
		title: 'STP Service',
		link: 'https://www.stpservice.ee/ee',
		image: '/projects/stp-service.png',
	},
];

export default function ProjectsPage() {
	return (
		<ul className="grid md:grid-cols-2 w-full gap-8 pb-8">
			{projects.map((project) => {
				return (
					<li
						key={project.title}
						className="relative flex flex-col gap-4 p-4 border bg-card animate-fade"
					>
						<Plus />

						<AspectRatio ratio={16 / 9}>
							<a
								href={project.link}
								target="_blank"
							>
								<Image
									src={project.image}
									alt={`${project.title} website thumbnail`}
									className="bg-accent border opacity-90"
									sizes="(max-width: 768px) 100vw, 33vw"
									fill
								/>
							</a>
						</AspectRatio>

						<div className="px-1 flex flex-row items-center justify-between">
							<h2
								className="text-2xl font-bold tracking-tight"
								style={{ fontSize: 'clamp(20px, 2.5vw, 24px)' }}
							>
								{project.title}
							</h2>

							<Button
								asChild
								size="sm"
								className="w-fit text-base"
							>
								<a
									href={project.link}
									target="_blank"
								>
									Visit
								</a>
							</Button>
						</div>
					</li>
				);
			})}
		</ul>
	);
}
