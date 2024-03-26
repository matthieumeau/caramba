import { useParams } from 'react-router-dom';

interface Params {
  roomId: string;
}

const GameRoom = () => {
  const { roomId } = useParams<Params>();

  return (
    <>
      <div>{roomId}</div>
    </>
  );
};

export default GameRoom;
