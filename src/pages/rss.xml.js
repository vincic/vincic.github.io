import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { postDate, postUrl, sortedPosts } from '@/lib/posts';

export async function GET(context) {
  const posts = sortedPosts(await getCollection('posts'));
  return rss({
    title: 'Sasha Vinčić',
    description: 'Notes by Sasha Vinčić on agentic engineering, software work, founders, and the occasional personal detour.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: postDate(post),
      description: post.data.description,
      link: postUrl(post),
    })),
  });
}
