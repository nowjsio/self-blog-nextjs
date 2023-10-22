import { NextResponse } from 'next/server';
import { sendMail } from '@/service/sendmail';
/**
 * api route 를 사용하려면, component 를 사용할 때, page.tsx 라고 규약된것처럼, route.tsx 로 사용해야된다.
 * return type 이 NextResponse 라면, 해당 응답을 return 해야된다.
 * ex)
 * NextResponse.json({data});
 * return;
 *  이런식으로 하면, 500error 발생함
 */

// export function GET(request: Request) {
//   console.log('os.hostname: ', os.hostname());
//   // console.log(request.headers);
//   const data = { message: 'response GET', os: os.hostname() };
//   // return NextResponse.redirect('http://localhost:3000/about');
//   return NextResponse.json({ data });
// }

export async function POST(request: Request) {
  const { address, subject, textarea } = await request.json();
  try {
    await sendMail(address, subject, textarea);
    return NextResponse.json({ message: 'success' });
  } catch (e) {
    return NextResponse.json({ message: e });
  }
}

// export async function GET() { // 공식 문서
//   const res = await fetch('https://data.mongodb-api.com/...', {
//     headers: {
//       'Content-Type': 'application/json',
//       'API-Key': process.env.DATA_API_KEY,
//     },
//   });
//   const data = await res.json();

//   return NextResponse.json({ data });
// }

// export async function POST() { // 공식 문서
//     const res = await fetch('https://data.mongodb-api.com/...', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'API-Key': process.env.DATA_API_KEY,
//       },
//       body: JSON.stringify({ time: new Date().toISOString() }),
//     })

//     const data = await res.json()

//     return NextResponse.json(data)
//   }
