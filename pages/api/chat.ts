// pages/api/chat.ts

import type { NextApiRequest, NextApiResponse } from 'next';

type Message = {
  sender: string;
  content: string;
};

let messages: Message[] = [
  { sender: 'User1', content: 'Hello there!' },
  // ...other messages
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Message[] | { message: string }>
) {
  if (req.method === 'GET') {
    res.status(200).json(messages);
  } else if (req.method === 'POST') {
    const { sender, content } = req.body;
    const newMessage: Message = {
      sender,
      content,
    };
    messages.push(newMessage);
    res.status(201).json(newMessage);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
