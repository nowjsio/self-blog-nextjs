'use client';
import PostCard, { PostCardType } from '@/components/server/PostCard/PostCard';
import { PostCardDataType } from '@/service/posts';
import Image from 'next/image';
import Link from 'next/link';
// import PostCard from '@/components/server/PostCard/PostCard';
// import PostCard, { Props } from '@/components/server/PostCard/PostCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

type Props = {
  posts: PostCardDataType[];
};

export default function CustomCarousel({ posts }: Props) {
  return (
    // <p>test</p>
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={false}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      //   containerClass="carousel-container"
      //   itemClass="carousel-image-item"
      removeArrowOnDeviceType={['tablet', 'mobile']}
      //   dotListClass="custom-dot-list-style"
    >
      {posts.map((item) => {
        const postcard: PostCardType = { ...item, size: 'w-1/3' };
        return <PostCard key={item.path} postcard={postcard} isCarousel={true} />;
      })}
    </Carousel>
  );
}
