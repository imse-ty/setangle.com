import type { PortableTextBlock } from '@portabletext/types';
import type { ImageAsset, Slug } from '@sanity/types';
import groq from 'groq';
import { type SanityClient } from 'next-sanity';

export const rolesQuery = groq`*[_type == "role" && defined(slug.current)] | order(_createdAt desc)`;

export async function getRoles(client: SanityClient): Promise<Role[]> {
  return await client.fetch(rolesQuery);
}

export const roleBySlugQuery = groq`*[_type == "role" && slug.current == $slug][0]`;

export async function getRole(
  client: SanityClient,
  slug: string
): Promise<Role> {
  return await client.fetch(roleBySlugQuery, {
    slug
  });
}

export const roleSlugsQuery = groq`
*[_type == "role" && defined(slug.current)][].slug.current
`;

export interface Role {
  _type: 'role';
  _id: string;
  _createdAt: string;
  title?: string;
  slug: Slug;
  excerpt?: string;
  mainImage?: ImageAsset;
  body: PortableTextBlock[];
}
