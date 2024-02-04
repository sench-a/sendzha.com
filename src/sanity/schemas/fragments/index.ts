import { defineField } from 'sanity';

export const title = defineField({
	name: 'title',
	title: 'Title',
	type: 'string',
	validation: (Rule) => Rule.required(),
});

export const link = defineField({
	name: 'link',
	title: 'Link',
	type: 'url',
	validation: (Rule) => Rule.required(),
});

export const image = defineField({
	name: 'image',
	title: 'Image',
	type: 'image',
	options: {
		hotspot: true,
	},
	validation: (Rule) => Rule.required(),
});
