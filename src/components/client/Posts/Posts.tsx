'use client';
import { useState, useEffect } from 'react';
import { PostCardDataType } from '@/service/posts';
import { PostCardType } from '@/components/server/PostCard/PostCard';
import PostCard from '@/components/server/PostCard/PostCard';
export default function Posts() {
  const [category, setCategory] = useState('All posts');
  const [posts, setPosts] = useState<PostCardDataType[]>([]);
  useEffect(() => {
    async function updateCategoryItems(category: string) {
      const res = await fetch(`/api/posts?category=${category}`, { method: 'GET' });
      const json = await res.json();
      const posts = json;
      //   console.log(posts?.message);
      setPosts(posts?.message);
    }
    updateCategoryItems(category);
  }, [category]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // console.log(e?.target);
    const value = (e?.target as HTMLButtonElement).value;
    setCategory(value);
  };
  return (
    <div className="flex justify-between">
      <section className="w-full flex flex-wrap justify-start items-center">
        {posts.map((item) => {
          const postcard: PostCardType = { ...item, size: 'w-full' };
          return <PostCard key={item.path} postcard={postcard} />;
        })}
      </section>
      <section className="flex flex-col">
        <p className="text-2xl mb-4 underline underline-offset-8 decoration-blue-500"> category</p>
        <button className="hover:bg-blue-500 hover:rounded-full hover:text-white " onClick={handleClick} value="All posts">
          All posts
        </button>
        <button className="hover:bg-blue-500 hover:rounded-full hover:text-white " onClick={handleClick} value="my story">
          my story
        </button>
        <button className="hover:bg-blue-500 hover:rounded-full hover:text-white" onClick={handleClick} value="frontend">
          frontend
        </button>
        <button className="hover:bg-blue-500 hover:rounded-full hover:text-white" onClick={handleClick} value="backend">
          backend
        </button>
        <button className="hover:bg-blue-500 hover:rounded-full hover:text-white" onClick={handleClick} value="javascript">
          javascript
        </button>
      </section>
    </div>
  );
}
