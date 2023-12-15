import { useState, useEffect, useRef } from 'react';

interface IMessage {
  id: number;
  sender: string;
  content: string;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<IMessage[]>([
    // Dummy message for layout purposes
    { id: 1, sender: 'Anderson Vanhron', content: 'I have no issue with any other packages installed with root permission globally.' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  const handleNewMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const newId = messages.length + 1;
    const newMessages = [...messages, { id: newId, sender: 'You', content: newMessage }];
    setMessages(newMessages);
    setNewMessage('');
    scrollToBottom();
  };

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-none">
        {/* Top bar with user info and icons */}
      </div>
      <div className="flex-grow overflow-auto">
        {/* List of messages */}
        {messages.map((message) => (
          <div key={message.id} className="p-4 flex justify-end">
            <div className="bg-blue-500 text-white rounded-lg p-2 max-w-xs">
              {message.content}
            </div>
          </div>
        ))}
        <div ref={endOfMessagesRef} />
      </div>
      <div className="flex-none p-4">
        <div className="flex rounded-lg border overflow-hidden">
          <input
            className="flex-grow p-2 text-lg border-none"
            type="text"
            placeholder="Write your message!"
            value={newMessage}
            onChange={handleNewMessageChange}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button
            className="bg-blue-500 text-white p-2"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
