import { Icon, Icons } from '@/components/icons';
import { siteConfig } from '@/config/site';
import type { StructureBuilder } from 'sanity/structure';

interface StructureItem {
	title: string;
	type: string;
	icon: Icon;
}

const singletons: StructureItem[] = [{ title: 'Contact', type: 'contact', icon: 'contact' }];
const lists: StructureItem[] = [{ title: 'Projects', type: 'project', icon: 'project' }];

export const structure = (S: StructureBuilder) =>
	S.list()
		.title(siteConfig.title)
		.items([
			...singletons.map((document) => {
				const Icon = Icons[document.icon];

				return S.listItem()
					.title(document.title)
					.child(
						S.document()
							.title(document.title)
							.documentId(document.type)
							.schemaType(document.type),
					)
					.icon(Icon);
			}),

			...lists.map((document) => {
				const Icon = Icons[document.icon];

				return S.documentTypeListItem(document.type).icon(Icon).title(document.title);
			}),
		]);
