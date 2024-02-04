import { type PluginOptions, isDev } from 'sanity';
import { visionTool } from '@sanity/vision';
import { structureTool } from 'sanity/structure';
import { apiVersion } from '@/sanity/config/constants';
import { structure } from './structure';

const desk = structureTool({ structure: structure });
const vision = visionTool({ defaultApiVersion: apiVersion });

// Making 'Vision' plugin included only in development mode
// Reference: https://www.sanity.io/docs/the-vision-plugin#99e58b8eeaf1
export const plugins: PluginOptions[] = isDev ? [desk, vision] : [desk];
