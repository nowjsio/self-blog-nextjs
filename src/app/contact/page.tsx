import MailForm from '@/components/client/MailForm/MailForm';
import Link from 'next/link';
import { BsYoutube, BsGithub, BsInstagram } from 'react-icons/bs';
export default function ContactPage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <section className="flex flex-col text-center">
          <p className="font-bold text-4xl">Contact Me</p>
          <p className="mt-5">nowjsio@gmail.com</p>
          <section className="flex mt-2">
            <Link className="m-5" href="https://instagram.com" target="_blank">
              <BsInstagram size={40}></BsInstagram>
            </Link>
            <Link className="m-5" href="https://youtube.com" target="_blank">
              <BsYoutube size={40}></BsYoutube>
            </Link>
            <Link className="m-5" href="https://github.com" target="_blank">
              <BsGithub size={40}></BsGithub>
            </Link>
          </section>
        </section>
        <section className="mt-20 font-bold text-4xl">Or Send me an email</section>
        <MailForm></MailForm>
      </div>
    </>
  );
}
