import {
	Cog,
	Link,
	Mail,
	Plus,
	Send,
	Code,
	Github,
	Webhook,
	ChevronUp,
	Instagram,
	ChevronLeft,
	SmartphoneNfc,
} from 'lucide-react';

export const Icons = {
	link: Link,
	plus: Plus,
	config: Cog,
	email: Mail,
	project: Code,
	telegram: Send,
	github: Github,
	webhook: Webhook,
	back: ChevronLeft,
	instagram: Instagram,
	chevronUp: ChevronUp,
	contact: SmartphoneNfc,
};

export type Icon = keyof typeof Icons;
