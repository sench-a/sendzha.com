import type { SchemaTypeDefinition } from 'sanity';
import contact from '@/sanity/schemas/contact';
import project from '@/sanity/schemas/project';

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [project, contact],
};
