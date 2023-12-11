// pages/api/posts.ts

import type { NextApiRequest, NextApiResponse } from 'next';

type Post = {
  id: number;
  content: string;
  likes: number;
};

let posts: Post[] = [
  { id: 1, content: 'This is the first post', likes: 0 },
  // ...other posts
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[] | { message: string }>
) {
  if (req.method === 'GET') {
    res.status(200).json(posts);
  } else if (req.method === 'POST') {
    const { content } = req.body;
    const newPost: Post = {
      id: posts.length + 1,
      content,
      likes: 0,
    };
    posts.push(newPost);
    res.status(201).json(newPost);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
