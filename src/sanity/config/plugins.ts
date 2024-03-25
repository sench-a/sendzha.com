import { visionTool } from '@sanity/vision';
import { structureTool } from 'sanity/structure';
import { structure } from '@/sanity/config/structure';
import { apiVersion } from '@/sanity/config/constants';
import { type PluginOptions, isDev } from 'sanity';

const desk = structureTool({ structure: structure });
const vision = visionTool({ defaultApiVersion: apiVersion });

// Making 'Vision' plugin included only in development mode
// Reference: https://www.sanity.io/docs/the-vision-plugin#99e58b8eeaf1
export const plugins: PluginOptions[] = isDev ? [desk, vision] : [desk];
