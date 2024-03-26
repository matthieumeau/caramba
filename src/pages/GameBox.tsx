import { useParams } from 'react-router-dom';
import ChatBox from '../components/ChatBox.tsx';

interface Params {
  roomId: string;
}

const GameRoom = () => {
  const { roomId } = useParams<Params>();

  return (
    <>
      <div className="w-full h-full relative">
        {roomId}
        <ChatBox />
      </div>
    </>
  );
};

export default GameRoom;
