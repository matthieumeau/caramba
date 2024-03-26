import { useState, useEffect } from 'react';
import CreateUsernameForm from './CreateUsernameForm.tsx';
import Button from './components/Button.tsx';
import './App.css';
import JoinRoomForm from './components/JoinRoomForm.tsx';

function App() {
  const [showUserNameCreation, setShowUserNameCreation] = useState<boolean>(true);
  const [username, setUsername] = useState<string>('');
  const [roomCreationMode, setRoomCreationMode] = useState<boolean>(true);

  useEffect(() => {
    readCookie();
  }, []);

  useEffect(() => {
    setCookie();
  }, [showUserNameCreation]);

  // Function to read the cookie
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
  // Function to set the cookie
  const setCookie = () => {
    // Calculate the expiration date 30 days from now
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 30);

    // Format the expiration date according to the cookie format
    const expires = expirationDate.toUTCString();

    // Set the cookie with the calculated expiration date
    document.cookie = `userName=${username}; expires=${expires};`;
  };

  function validate() {
    setShowUserNameCreation(false);
  }

  function onInputChange(e) {
    setUsername(e.target.value);
  }

  return (
    <>
      {showUserNameCreation && (
        <CreateUsernameForm
          username={username}
          onValidate={validate}
          onInputChange={onInputChange}
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
export default App;
