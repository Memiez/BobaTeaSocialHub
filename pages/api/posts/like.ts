// pages/api/posts/[id]/like.ts

import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ id: number; likes: number }>
) {
  const { id } = req.query;

  if (req.method === 'POST') {
    // Increase the like count for the post with the given id
    // This is just a placeholder logic, you should implement proper database logic
    const post = { id: Number(id), likes: 1 }; // Replace with actual logic to update likes
    res.status(200).json(post);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
