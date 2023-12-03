import Image from 'next/image';
import Link from 'next/link';
import { getPosts } from '@/service/posts';
import PostCard, { PostCardType } from '@/components/server/PostCard/PostCard';
import CustomCarousel from '@/components/client/CustomCarousel/CustomCarousel';
import AboutMe from '@/components/server/AboutMe/AboutMe';
import TestParent from '@/components/server/TestParent/TestParent';
import TestChildren from '@/components/server/TestChildren/TestChildren';
export default async function MainPage() {
  const posts = await getPosts();
  return (
    <>
      <div className="flex flex-col">
        <AboutMe />
        <TestParent hello={123}>
          <TestChildren />
        </TestParent>

        <section className="mt-5">
          <p className="text-xl font-semibold">Featured Posts</p>
          <div className="flex flex-wrap justify-start items-center">
            {posts.map((item) => {
              if (item?.featured === true) {
                const postcard: PostCardType = { ...item, size: 'w-full' };
                return <PostCard key={item.path} postcard={postcard} />;
              }
            })}
          </div>
        </section>
        <section className="mt-5">
          <p className="text-xl font-semibold">You may likes</p>
          <section>
            <CustomCarousel posts={posts} />
          </section>
        </section>
      </div>
    </>
  );
}
