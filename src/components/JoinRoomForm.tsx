import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from './Button.tsx';

const JoinRoomForm = () => {
  const [roomId, setRoomId] = useState<string>('');
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate(`/room/${roomId}`);
  };

  return (
    <>
      <div className="w-80 h-max rounded-lg shadow border mt-10 bg-gray-900 border-gray-700">
        <form onSubmit={handleSubmit}>
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div>
              <label
                htmlFor="pseudo"
                className="block mb-2 text-sm font-medium text-white text-left">
                Id de la partie
              </label>
              <input
                type="text"
                id="pseudo"
                className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Id"
                value={roomId}
                onChange={(e) => {
                  setRoomId(e.target.value);
                }}
                required
              />
            </div>
            <Button type="submit" disabled={!roomId.length}>
              Rejoindre
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default JoinRoomForm;
