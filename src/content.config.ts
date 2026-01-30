import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const venues = defineCollection({
	loader: glob({ base: './src/content/venues', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			capacity: z.number(),
			sqm: z.number(),
			features: z.array(z.string()),
			heroImage: z.string().or(image()),
			gallery: z.array(z.string().or(image())).optional(),
			amenities: z.object({
				wifi: z.boolean().default(true),
				av: z.boolean().default(true),
				catering: z.boolean().default(true),
			}),
		}),
});

const events = defineCollection({
	loader: glob({ base: './src/content/events', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			client: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			heroImage: z.string().or(image()),
			tags: z.array(z.string()),
		}),
});

const podcasts = defineCollection({
	loader: glob({ base: './src/content/podcasts', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			host: z.string(),
			guest: z.string().optional(),
			description: z.string(),
			pubDate: z.coerce.date(),
			audioUrl: z.string(),
			coverImage: z.string().or(image()),
		}),
});

export const collections = { venues, events, podcasts };
