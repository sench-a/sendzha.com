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
};
