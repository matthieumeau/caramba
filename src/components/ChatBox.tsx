import { useState, useRef } from 'react';
import ChatBoxMessage from './ChatBox/ChatBoxMessage.tsx';
const ChatBox = () => {
  const [message, setMessage] = useState<string>('');
  const formRef = useRef<HTMLFormElement>(null);
  const sendMessage = (e) => {
    e.preventDefault();
    console.log('SEND', message);
    setMessage('');
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
    <>
      <div className="w-[400px] h-[90%] px-3 pb-3 pt-5 text rounded-lg shadow border bg-gray-800 border-gray-700 absolute top-0 right-5 flex flex-col justify-between">
        <div className="w-full h-full text-sm rounded-lg border bg-gray-900 border-gray-600 placeholder-gray-400 text-whited mb-3 p-3">
          <ChatBoxMessage />
        </div>
        <form onSubmit={sendMessage} ref={formRef}>
          <div className="flex flex-col items-center">
            <textarea
              id="message"
              rows="2"
              className="block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-whited mb-3"
              placeholder="Votre message ..."
              value={message}
              onKeyDown={onEnterPress}
              onChange={(e) => {
                setMessage(e.target.value);
              }}></textarea>
            <button
              type="submit"
              disabled={!message.length}
              className="text-sm font-semibold bg-indigo-500 enabled:hover:bg-indigo-700 text-white py-1 px-3 rounded-md w-max h-max disabled:cursor-not-allowed disabled:opacity-50">
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChatBox;
