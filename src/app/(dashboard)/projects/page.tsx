import Link from 'next/link';
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
		stack: 'Next.js 14, Shopify, Sanity, TypeScript, TailwindCSS, Vercel',
		features:
			'Cache Revalidations via Webhooks, Server Actions, GA4, Meta Pixel, Filters, Sorting, SSR Scroll Pagination, Search, Wishlist, Shopping Cart, Dark Mode',
	},
	{
		title: 'STP Service',
		link: 'https://www.stpservice.ee/ee',
		image: '/projects/stp-service.png',
		stack: 'Next.js 13, Resend, Sanity, TypeScript, TailwindCSS, Vercel',
		features: 'Cache Revalidations via Webhooks, GA4, Meta Pixel, i18n, Emails',
	},
	{
		title: 'useTransition',
		link: 'https://www.usetransition.com',
		image: '/projects/usetransition.png',
		stack: 'Next.js 13, Stripe, Resend, Sanity, TypeScript, TailwindCSS, Vercel',
		features: 'Payment Validation via Webhook, Emails, GA4',
	},
];

export default function ProjectsPage() {
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
							key={project.title}
							className="relative flex flex-col gap-4 p-4 border bg-card rounded-[4px]"
						>
							<Plus />

							<AspectRatio ratio={16 / 9}>
								<Image
									src={project.image}
									alt={`${project.title} website thumbnail`}
									className="bg-accent object-cover object-center"
									sizes="(max-width: 768px) 100vw, 33vw"
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

								<div className="space-y-2">
									<p className="text-sm text-muted-foreground">
										<span className="text-primary">Stack:</span> {project.stack}
									</p>

									<p className="text-sm text-muted-foreground">
										<span className="text-primary">Features:</span>{' '}
										{project.features}
									</p>
								</div>
							</div>
						</li>
					);
				})}
			</ul>
		</>
	);
}
