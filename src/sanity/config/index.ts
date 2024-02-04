import { defineConfig } from 'sanity';
import { schema } from '@/sanity/schemas';
import { plugins } from '@/sanity/config/plugins';
import { dataset, projectId } from '@/sanity/config/constants';

export default defineConfig({
	basePath: '/studio',
	projectId,
	dataset,
	schema,
	plugins: plugins,
});
