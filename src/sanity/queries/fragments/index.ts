import { groq } from 'next-sanity';

export const imageFragment = groq`
	image {
		...,      
		// https://nextjs.org/docs/app/api-reference/components/image#blurdataurl
		"blurDataUrl": asset -> metadata.lqip 
	}
`;

export const materialVariantFragment = groq`
	..., 
	"composition": ^.composition, 
	${imageFragment}
`;
