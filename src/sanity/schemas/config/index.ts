import { Icons } from '@/components/icons';
import { title } from '@/sanity/schemas/fragments';
import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'config',
	title: 'Config',
	type: 'document',
	icon: Icons.config,
	fields: [
		defineField({
			name: 'siteTitle',
			title: 'Website Title',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),

		title,

		defineField({
			name: 'subtitle',
			title: 'Subtitle',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
	],
});
