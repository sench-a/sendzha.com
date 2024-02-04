import Link from 'next/link';
import Image from 'next/image';
import { Plus } from '@/components/plus';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { createSanityImageUrl } from '@/sanity/lib/image';
import { getProjects } from '@/sanity/lib';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Projects',
	description: 'Discover my projects',
};

export default async function ProjectsPage() {
	const projects = await getProjects();

	return (
		<>
			<h1
				className="mb-8 font-bold tracking-tight uppercase"
				style={{ fontSize: 'clamp(24px, 5vw, 30px)' }}
			>
				Selected Projects
			</h1>

			<ul className="grid md:grid-cols-2 w-full gap-8 pb-8">
				{projects.map((project) => {
					return (
						<li
							key={project._id}
							className="relative flex flex-col gap-4 p-4 border bg-card rounded-sm"
						>
							<Plus />

							<AspectRatio ratio={16 / 9}>
								<Image
									src={createSanityImageUrl(project.image)}
									alt={`${project.title} website thumbnail`}
									className="bg-accent object-cover object-center border rounded-sm"
									blurDataURL={project.image.blurDataUrl}
									sizes="(max-width: 768px) 100vw, 33vw"
									placeholder="blur"
									fill
								/>
							</AspectRatio>

							<div className="px-1 space-y-4">
								<div className="flex flex-row items-center justify-between">
									<h2 className="text-xl font-bold tracking-tight">
										{project.title}
									</h2>

									<Button
										asChild
										size="sm"
										className="w-fit text-sm"
									>
										<Link
											href={project.link}
											target="blank"
										>
											Visit
										</Link>
									</Button>
								</div>

								<p className="text-sm text-muted-foreground">
									{project.description}
								</p>

								<div className="flex flex-wrap flex-row gap-1.5">
									{project.stack.map((item) => (
										<Link
											key={item.key}
											href={item.link}
											target="blank"
										>
											<Badge variant="secondary">{item.title}</Badge>
										</Link>
									))}
								</div>
							</div>
						</li>
					);
				})}
			</ul>
		</>
	);
}
