import Image from 'next/image';
import Link from 'next/link';
export default function AboutMe() {
  return (
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
  );
}
