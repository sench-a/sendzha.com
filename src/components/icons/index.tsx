import {
	Cog,
	Link,
	Mail,
	Plus,
	Send,
	Code,
	Github,
	Instagram,
	ChevronLeft,
	SmartphoneNfc,
	Webhook,
} from 'lucide-react';

export const Icons = {
	email: Mail,
	github: Github,
	link: Link,
	back: ChevronLeft,
	plus: Plus,
	telegram: Send,
	instagram: Instagram,
	project: Code,
	config: Cog,
	contact: SmartphoneNfc,
	webhook: Webhook,
};

export type Icon = keyof typeof Icons;
