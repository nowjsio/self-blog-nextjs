import { NextResponse, NextRequest } from 'next/server';
import { getPostCategory } from '@/service/posts';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('category');
  console.log('query: ', query);
  if (!query || typeof query !== 'string') {
    return NextResponse.json({ message: [] });
  }

  const posts = await getPostCategory(query);
  return NextResponse.json({ message: posts });
}
