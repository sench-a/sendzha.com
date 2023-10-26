import { Github, Mail, Link, ChevronLeft } from 'lucide-react';

export type Icon = keyof typeof Icons;

export const Icons = {
	mail: Mail,
	github: Github,
	link: Link,
	chevronLeft: ChevronLeft,
};
