import type { PortableTextBlock } from '@portabletext/types';
import type { ImageAsset, Slug } from '@sanity/types';
import groq from 'groq';

export const projectQuery = groq`*[_type == "project" && slug.current == $slug][0]`;

export const projectsQuery = groq`*[_type == "project" && defined(slug.current)] | order(orderRank)`;

export interface Project {
	_type: 'project';
	_createdAt: string;
	title?: string;
	subtitle: string;
	summary: string;
	videoUrl: string;
	info: Array<any>;
	stats: Array<any>;
	slug: Slug;
	cover?: ImageAsset;
	body: PortableTextBlock[];
}
