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
			{/* <h1
				className="mb-8 font-bold tracking-tight uppercase"
				style={{ fontSize: 'clamp(24px, 5vw, 30px)' }}
			>
				Selected Projects
			</h1> */}

			<ul className="grid md:grid-cols-2 w-full gap-8 pb-8">
				{projects.map((project) => {
					return (
						<li
							key={project._id}
							className="relative flex flex-col gap-4 p-4 border bg-card/80"
						>
							<Plus />

							<AspectRatio ratio={16 / 9}>
								<Image
									src={createSanityImageUrl(project.image)}
									alt={`${project.title} website thumbnail`}
									className="bg-accent object-cover object-center border"
									blurDataURL={project.image.blurDataUrl}
									sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw"
									placeholder="blur"
									fill
								/>
							</AspectRatio>

							<div className="px-1 flex flex-col gap-2 h-fit">
								<div className="flex flex-row items-center justify-between">
									<h2 className="text-xl font-bold tracking-tight">
										{project.title}
									</h2>

									<Link
										href={project.link}
										target="blank"
										className="inline-flex h-9 px-3 animate-shimmer items-center justify-center rounded-full border-slate-800 text-primary-foreground text-sm bg-[linear-gradient(110deg,#FFF,45%,#F5F5F5,55%,#FFF)] bg-[length:200%_100%] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
									>
										Visit
									</Link>
								</div>

								<p className="text-sm text-muted-foreground">
									{project.description}
								</p>

								<div className="mt-4 flex flex-wrap flex-row gap-1.5">
									{project.stack.map((item) => (
										<Badge
											key={item}
											variant="secondary"
										>
											{item}
										</Badge>
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
