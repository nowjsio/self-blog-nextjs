import * as fs from 'fs/promises';
import path from 'path';
import ReactMarkDown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import scss from 'react-syntax-highlighter/dist/cjs/languages/prism/scss';
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
import markdown from 'react-syntax-highlighter/dist/cjs/languages/prism/markdown';
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json';
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import { getPost } from '@/service/posts';
import { notFound } from 'next/navigation';

// SyntaxHighlighter.registerLanguage('tsx', tsx);
// SyntaxHighlighter.registerLanguage('typescript', typescript);
// SyntaxHighlighter.registerLanguage('scss', scss);
// SyntaxHighlighter.registerLanguage('bash', bash);
// SyntaxHighlighter.registerLanguage('markdown', markdown);
// SyntaxHighlighter.registerLanguage('json', json);
// SyntaxHighlighter.registerLanguage('javascript', javascript);

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostsSlugPage({ params: { slug } }: Props) {
  console.log('slug: ', slug);
  if (slug == null || typeof slug != 'string') {
    return notFound();
  } else {
    const post = await getPost(slug);
    let tmpPath = post?.path || 'notfound';
    let postMdFile = null;
    try {
      postMdFile = await fs.readFile(path.resolve('@', '../data/posts/md', `${tmpPath}.md`), { encoding: 'utf8' });
      if (postMdFile == null) {
        return notFound();
      }
    } catch (e) {
      console.error(e);
      throw new Error('data is unknown, try other posts');
    }
    return (
      <div className="flex justify-center items-center">
        <ReactMarkDown remarkPlugins={[remarkGfm]} className="prose max-w-6xl">
          {postMdFile}
        </ReactMarkDown>
      </div>
    );
  }
}
