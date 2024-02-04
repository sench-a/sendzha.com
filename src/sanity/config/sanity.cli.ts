/**
 * This configuration file lets you run `sanity [command]` in this folder
 * Reference: https://www.sanity.io/docs/cli
 **/
import { defineCliConfig } from 'sanity/cli';
import { dataset, projectId } from '@/sanity/config/constants';

export default defineCliConfig({ api: { projectId, dataset } });
