import Image from 'next/image';
import Link from 'next/link';
import { getPosts } from '@/service/posts';
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
            {posts.map(({ date, title, description, category, featured, path }, index) => {
              if (featured) {
                return (
                  <div key={path} className="w-1/3 flex flex-col">
                    <Link href={`/posts/${path}`} className="w-11/12 h-2/5 mb-4">
                      <Image src={`/images/posts/${path}.png`} alt={`${path}`} width={0} height={0} sizes="100vw" className="w-full h-auto" />
                      <section className="w-full flex flex-col items-center">
                        <p className="w-auto ml-auto">{date}</p>
                        <p className="font-semibold text-lg">{title}</p>
                        <p className="">{description}</p>
                        <p className="w-1/6 text-center  bg-green-300 rounded-full">{category}</p>
                      </section>
                    </Link>
                  </div>
                );
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
