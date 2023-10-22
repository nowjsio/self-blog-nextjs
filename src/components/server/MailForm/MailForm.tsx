import { sendMail } from '@/service/sendmail';

export default function MailForm() {
  const sendMail2 = () => {};
  return (
    <>
      <div className="flex flex-col bg-cyan-950 w-1/3 p-5">
        <section className="w-full flex flex-col">
          <p className="text-white mt-2">Your Email</p>
          <input type="text" placeholder="tester@gmail.com" />
          <p className="text-white mt-2">Subject</p>
          <input type="text" placeholder="nextjs" />
          <p className="text-white mt-2">Message </p>
          <textarea placeholder="hello, i'm tester."></textarea>
          <button className="text-cyan-950 bg-yellow-300 rounded-lg mt-7" onClick={sendMail2}>
            Submit
          </button>
        </section>
      </div>
    </>
  );
}
