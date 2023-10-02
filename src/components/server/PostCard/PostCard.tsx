import Image from 'next/image';
import Link from 'next/link';
import { PostCardDataType } from '@/service/posts';

type SizeOptions = 'w-full' | 'w-2/3' | 'w-1/2' | 'w-1/3' | 'w-1/5';

export type PostCardType = PostCardDataType & {
  size: SizeOptions;
};

type Props = {
  postcard: PostCardType;
};
export default function PostCard({ postcard }: Props) {
  const { date, title, description, category, featured, path, size } = postcard;
  if (featured) {
    return (
      <div className="w-1/3 flex flex-col">
        <Link href={`/posts/${path}`} className="w-11/12 h-2/5 mb-4">
          <Image src={`/images/posts/${path}.png`} alt={`${path}`} width={0} height={0} sizes={'100vw'} className={`${size} h-auto`} />
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
}
