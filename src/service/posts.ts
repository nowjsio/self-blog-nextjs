import path from 'path';
import * as fs from 'fs/promises';
export type Post = {
  title: string;
  description: string;
  date: string;
  category: string[];
  featured: boolean;
  path: string;
};
export async function getPosts(): Promise<Post[]> {
  const postsPath = path.resolve('@', '../', 'data/posts/posts.json');
  const data = await fs.readFile(postsPath, { encoding: 'utf-8' });
  return JSON.parse(data);
}

export async function getPost(path: string): Promise<Post | undefined> {
  const posts = await getPosts();
  return posts.find((item) => item.path === path);
}
