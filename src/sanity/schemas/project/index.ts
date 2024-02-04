import { Icons } from '@/components/icons';
import { link, title } from '@/sanity/schemas/fragments';
import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
	name: 'project',
	title: 'Projects',
	type: 'document',
	icon: Icons.project,
	fields: [
		title,
		link,

		defineField({
			name: 'description',
			title: 'Description',
			type: 'text',
			validation: (Rule) => Rule.required(),
		}),

		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true,
			},
			validation: (Rule) => Rule.required(),
		}),

		defineField({
			name: 'stack',
			title: 'Tech Stack',
			type: 'array',
			of: [
				defineArrayMember({
					name: 'item',
					title: 'Tech',
					type: 'object',
					fields: [title, link],
				}),
			],
		}),
	],
});
