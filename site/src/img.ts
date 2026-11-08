import type { ImageMetadata } from 'astro';

// Every image in src/assets/images, so Astro can resize + convert it to WebP at build time.
const all = import.meta.glob<{ default: ImageMetadata }>('/src/assets/images/*.{jpg,jpeg,png,webp}', { eager: true });

/** Resolve "images/foo.jpg" (as written in content files) to optimisable image metadata. */
export function img(path: string): ImageMetadata {
  const key = `/src/assets/images/${path.replace(/^\/?images\//, '')}`;
  const found = all[key];
  if (!found) throw new Error(`Image not found: ${path} (expected at ${key})`);
  return found.default;
}
