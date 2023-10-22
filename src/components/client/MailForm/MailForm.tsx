'use client';
import { useRef } from 'react';
import { object, string, number, ValidationError } from 'yup';
// import config from '@/service/config';
import axios from 'axios';

let userSchema = object({
  subject: string().required(),
  textarea: string().required(),
  // textarea: number().required().positive().integer(),
  address: string().email(),
});

export default function MailForm() {
  const addressRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const sendMailAPI = async function (address: string | undefined, subject: string | undefined, textarea: string | undefined) {
    const data = JSON.stringify({ address, subject, textarea });
    const options = {
      method: 'POST',
      data,
      url: '/api/sendMail',
      headers: {
        'content-type': 'application/json; charset=utf-8',
      },
    };
    try {
      const response = await axios(options);
      // console.log(response);
      return response?.data;
    } catch (e) {
      throw new Error('sendMailAPI throws error: ' + e);
    }
  };

  const handleClick = async function () {
    const address = addressRef?.current?.value;
    const subject = subjectRef?.current?.value;
    const textarea = textareaRef?.current?.value;

    try {
      await userSchema.validate({ address, subject, textarea });
      const response = await sendMailAPI(address, subject, textarea);
      alert(response?.message);
      // console.log('[+] success send mail');
    } catch (e) {
      if (ValidationError.isError(e)) {
        // alert(config.mailID);
        alert('validationError: ' + e.message);
        // addressRef?.current?.focus();
      } else {
        alert('sorry, occured error, retry');
      }
    }
  };

  return (
    <>
      <div className="flex flex-col bg-cyan-950 w-1/3 p-5">
        <section className="w-full flex flex-col">
          <p className="text-white mt-2">Your Email</p>
          <input type="text" ref={addressRef} placeholder="tester@gmail.com" />
          <p className="text-white mt-2">Subject</p>
          <input type="text" ref={subjectRef} placeholder="nextjs" />
          <p className="text-white mt-2">Message </p>
          <textarea ref={textareaRef} placeholder="hello, i'm tester."></textarea>
          <button className="text-cyan-950 bg-yellow-300 rounded-lg mt-7" onClick={handleClick}>
            Submit
          </button>
        </section>
      </div>
    </>
  );
}
