import createImageUrlBuilder from '@sanity/image-url';
import { dataset, projectId } from '@/sanity/config/constants';
import type { Image as SanityImage } from '@/types';

const imageBuilder = createImageUrlBuilder({
	projectId,
	dataset,
});

export const createSanityImageUrl = (source: SanityImage): string => {
	return imageBuilder?.image(source).quality(100).format('webp').url();
};
