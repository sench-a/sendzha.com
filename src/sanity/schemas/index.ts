import type { SchemaTypeDefinition } from 'sanity';
import contact from '@/sanity/schemas/contact';
import project from '@/sanity/schemas/project';
import config from '@/sanity/schemas/config';

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [project, config, contact],
};
