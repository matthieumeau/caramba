import { useState, useEffect } from 'react';
import CreateUsernameForm from '../CreateUsernameForm.tsx';
import Button from '../components/Button.tsx';
import '../App.css';
import JoinRoomForm from '../components/JoinRoomForm.tsx';
import { useSocketCtx } from '../contexts/sockets.ts';
import { useNavigate } from 'react-router-dom';

function Index() {
  const [showUserNameCreation, setShowUserNameCreation] = useState<boolean>(true);
  const [username, setUsername] = useState<string>('');
  const [roomCreationMode, setRoomCreationMode] = useState<boolean>(true);
  const { socket } = useSocketCtx();
  const navigate = useNavigate();

  useEffect(() => {
    readCookie();
    socket.on('join', (code: number) => {
      navigate(`/room/${code}`);
    });
  }, [navigate, socket]);

  useEffect(() => {
    setCookie();
  }, [showUserNameCreation]);

  const handleCreate = () => {
    socket.connect();
    socket.emit('join', null);
  };

  const readCookie = () => {
    const cookieValue = document.cookie
      .split('; ')
      .find((row) => row.startsWith('userName='))
      ?.split('=')[1];
    // Check if the cookie exists and has a value
    if (cookieValue) {
      setShowUserNameCreation(false);
      setUsername(cookieValue);
    }
  };
  const setCookie = () => {
    // Calculate the expiration date 30 days from now
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 30);

    // Format the expiration date according to the cookie format
    const expires = expirationDate.toUTCString();

    // Set the cookie with the calculated expiration date
    document.cookie = `userName=${username}; expires=${expires};`;
  };

  function validate(e) {
    e.preventDefault();
    setShowUserNameCreation(false);
  }

  return (
    <>
      {showUserNameCreation && (
        <CreateUsernameForm
          username={username}
          onValidate={validate}
          onInputChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      )}
      {!showUserNameCreation && (
        <>
          <h1 className="text-2xl font-bold text-white my-10">Bienvenue, {username}</h1>
          <div className={'flex gap-10'}>
            <Button
              active={roomCreationMode}
              onClick={() => {
                setRoomCreationMode(true);
                handleCreate();
              }}>
              Créer une partie
            </Button>
            <Button
              active={!roomCreationMode}
              onClick={() => {
                setRoomCreationMode(false);
              }}>
              Rejoindre une partie
            </Button>
          </div>
        </>
      )}
      {!showUserNameCreation && !roomCreationMode && (
        <>
          <JoinRoomForm />
        </>
      )}
    </>
  );
}
export default Index;
