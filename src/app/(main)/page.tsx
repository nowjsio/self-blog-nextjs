import Image from 'next/image';
import Link from 'next/link';
import { getPosts } from '@/service/posts';
import PostCard, { PostCardType } from '@/components/server/PostCard/PostCard';
export default async function MainPage() {
  const posts = await getPosts();
  return (
    <>
      <div className="flex flex-col">
        <section className="flex flex-col items-center">
          <Image src="/images/programmer-character.jpg" alt="programmer character image" width={200} height={200} className="rounded-full" />
          <div>
            <p className="text-center text-2xl font-semibold">Hi, I&apos;m nowjsio</p>
            <p className="text-center text-base ">Full-Stack developer</p>
            <p className="text-center text-base font-bold underline underline-offset-2">Just do it.</p>
          </div>
          <Link className="p-2 bg-black rounded-full font-bold text-white text-sm " href={'contact'}>
            Contact me
          </Link>
        </section>
        <section className="mt-5">
          <p className="text-xl font-semibold">Featured Posts</p>
          <div className="flex flex-wrap justify-start items-center">
            {posts.map((item) => {
              if (item.featured) {
                const postcard: PostCardType = { ...item, size: '100vw' };
                return <PostCard key={item.path} postcard={postcard} />;
              }
            })}
          </div>
        </section>

        <section className="mt-5">
          <p className="text-xl font-semibold">You may likes</p>
          <div>carouel posts</div>
        </section>
      </div>
    </>
  );
}
