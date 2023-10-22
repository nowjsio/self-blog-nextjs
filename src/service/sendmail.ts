import nodemailer from 'nodemailer';
import config from '@/service/config';

export const sendMail = (address: string | undefined, subject: string | undefined, textarea: string | undefined) => {
  return new Promise((resolve, rejcect) => {
    const transporter = nodemailer.createTransport({
      // host: 'smtp.gmail.com',
      // // 아래 secure 옵션을 사용하려면 465 포트를 사용해야함
      // port: 465,
      // secure: true, // true for 465, false for other ports
      service: 'gmail',
      // host: 'smtp.gmail.com',
      // port: 465,
      // secure: true,
      auth: {
        // 초기에 설정해둔 env 데이터
        user: config.mailID,
        pass: config.mailPWD,
      },
    });
    // console.log('address: ', address);
    let mailOptions = {
      from: address, // 발송 메일 주소 (위에서 작성한 gmail 계정 아이디) --> sjw: 해당사람의 메일 주소를 받아서 해당사람이 보낸것처럼은 구현못할듯? 메일 api 를 내껄로했는데 어케 가능함
      to: config.mailID, // 수신 메일 주소
      subject, // 제목
      text: `[${address}]: ${textarea}`, // 내용
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        // console.log('error is ' + error);
        rejcect(error); // or use rejcet(false) but then you will have to handle errors
      } else {
        // console.log('Email sent: ' + info.response);
        resolve(true);
      }
    });
  });
};
