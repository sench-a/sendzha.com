import { NextJS } from '@/components/icons/next';
import { Vercel } from '@/components/icons/vercel';
import { TailwindCSS } from '@/components/icons/tailwind';
import { Github, Mail, Link, ChevronLeft, Plus, Send, Instagram } from 'lucide-react';

export type Icon = keyof typeof Icons;

export const Icons = {
	mail: Mail,
	github: Github,
	link: Link,
	back: ChevronLeft,
	plus: Plus,
	telegram: Send,
	instagram: Instagram,
	next: NextJS,
	vercel: Vercel,
	tailwind: TailwindCSS,
};
