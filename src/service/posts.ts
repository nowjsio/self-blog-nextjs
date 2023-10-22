import path from 'path';
import * as fs from 'fs/promises';
export type PostCardDataType = {
  title: string;
  description: string;
  date: string;
  category: string;
  featured: boolean;
  path: string;
};
export async function getPosts(): Promise<PostCardDataType[]> {
  const postsPath = path.resolve('@', '../', 'data/posts/posts.json');
  const data = await fs.readFile(postsPath, { encoding: 'utf-8' });
  return JSON.parse(data);
}

export async function getPost(path: string): Promise<PostCardDataType | undefined> {
  const posts = await getPosts();
  return posts.find((item) => item.path === path);
}
export async function getPostCategory(category: string): Promise<PostCardDataType[]> {
  const posts = await getPosts();
  if (category === 'All posts') {
    return posts;
  }
  return posts.filter((item) => item.category === category);
}
