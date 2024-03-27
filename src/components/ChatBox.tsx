import { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams if you're using React Router
import ChatBoxMessage from './ChatBox/ChatBoxMessage.tsx';
import { useSocketCtx } from '../contexts/sockets.ts';

const ChatBox = () => {
  const [message, setMessage] = useState<string>('');
  const formRef = useRef<HTMLFormElement>(null);
  const { socket } = useSocketCtx();
  const { roomId } = useParams<string>();
  const [conversation, setConversation] = useState<string[]>([]);

  useEffect(() => {
    const messageHandler = (newMessage: string) => {
      console.log('got message');
      setConversation((prevConversation) => [...prevConversation, newMessage]);
    };
    socket.connect();
    socket.on('message', messageHandler);

    return () => {
      socket.off('message', messageHandler); // Cleanup socket listener
    };
  }, []); // Empty dependency array for mounting and cleanup

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() !== '') {
      console.log('sent message');
      socket.emit('message', { room: roomId, message: message, username: 'ratata' });
      setMessage(''); // Clear the message input after sending
    }
  };

  const onEnterPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (formRef.current) {
        sendMessage(e);
      }
    }
  };

  return (
    <div className="w-[400px] h-[90%] px-3 pb-3 pt-5 text rounded-lg shadow border bg-gray-800 border-gray-700 absolute top-0 right-5 flex flex-col justify-between">
      <div className="w-full h-full text-sm rounded-lg border bg-gray-900 border-gray-600 placeholder-gray-400 text-whited mb-3 p-3">
        {conversation.map((message, index) => (
          <ChatBoxMessage key={index} message={message} />
        ))}
      </div>
      <form onSubmit={sendMessage} ref={formRef}>
        <div className="flex flex-col items-center">
          <textarea
            id="message"
            rows={2}
            className="block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-whited mb-3"
            placeholder="Votre message ..."
            value={message}
            onKeyDown={onEnterPress}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            disabled={!message.trim().length}
            className="text-sm font-semibold bg-indigo-500 hover:bg-indigo-700 text-white py-1 px-3 rounded-md w-max h-max cursor-pointer">
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatBox;
