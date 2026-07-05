import type { CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

export function postDate(post: Post): Date {
  return post.data.pubDate ?? post.data.date ?? new Date('1970-01-01');
}

export function isDraft(post: Post): boolean {
  return Boolean(post.data.draft);
}

export function isArchived(post: Post): boolean {
  return Boolean(post.data.archived);
}

export function isPublicPost(post: Post): boolean {
  return !isDraft(post) && !isArchived(post);
}

export function isBuildablePost(post: Post): boolean {
  return !isDraft(post);
}

export function sortPostsByDate(posts: Post[]): Post[] {
  return [...posts].sort((a, b) => postDate(b).getTime() - postDate(a).getTime());
}

export function sortedPosts(posts: Post[]): Post[] {
  return sortPostsByDate(posts.filter(isPublicPost));
}

export function buildablePosts(posts: Post[]): Post[] {
  return sortPostsByDate(posts.filter(isBuildablePost));
}

export function featuredPosts(posts: Post[]): Post[] {
  return sortedPosts(posts).filter((post) => post.data.featured);
}

export function postsByIds(posts: Post[], ids: string[]): Post[] {
  const byId = new Map(sortedPosts(posts).map((post) => [post.id, post]));
  return ids.map((id) => byId.get(id)).filter((post): post is Post => Boolean(post));
}

export function postUrl(post: Post): string {
  return `/blog/${post.id}/`;
}

export function postTags(post: Post): string[] {
  return [...new Set([...(post.data.tags ?? []), ...(post.data.categories ?? [])])].filter(Boolean);
}

export function postImage(post: Post): string | undefined {
  const hero = post.data.heroImage;
  if (typeof hero === 'string' && hero.trim()) return hero;
  const image = post.data.image;
  if (typeof image === 'string' && image.trim()) return image;
  if (image && typeof image === 'object') {
    if (typeof image.url === 'string') return image.url;
    if (typeof image.feature === 'string') return `/images/${image.feature}`;
  }
  return undefined;
}

export function imageAppearsInline(post: Post, image?: string): boolean {
  if (!image || !post.body) return false;
  return post.body.includes(`](${image}`) || post.body.includes(`src="${image}`) || post.body.includes(`src='${image}`);
}
