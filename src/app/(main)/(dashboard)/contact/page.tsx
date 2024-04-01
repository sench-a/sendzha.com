import { ContactCard } from '@/components/contact/card';
import { getContact } from '@/sanity/lib';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact',
	description: "Let's connect",
};

export default async function ContactPage() {
	const contact = await getContact();

	return (
		<ul className="grid md:grid-cols-3 w-full gap-8 pb-8">
			{contact.items.map((item) => {
				return (
					<ContactCard
						key={item._key}
						item={item}
					/>
				);
			})}
		</ul>
	);
}
