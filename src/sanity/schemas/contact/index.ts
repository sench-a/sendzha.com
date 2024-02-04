import { Icons } from '@/components/icons';
import { title } from '@/sanity/schemas/fragments';
import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
	name: 'contact',
	title: 'Contact',
	type: 'document',
	icon: Icons.contact,
	fields: [
		defineField({
			name: 'items',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'object',
					name: 'item',
					fields: [
						title,
						defineField({
							name: 'type',
							type: 'string',
							options: {
								list: [
									{ title: 'Telegram', value: 'telegram' },
									{ title: 'Instagram', value: 'instagram' },
									{ title: 'Twitter', value: 'twitter' },
									{ title: 'Youtube', value: 'youtube' },
									{ title: 'Email', value: 'email' },
									{ title: 'Github', value: 'github' },
								],
							},
							validation: (Rule) => Rule.required(),
						}),
					],
				}),
			],
		}),
	],
});
