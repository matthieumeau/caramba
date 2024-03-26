import { useState, useEffect } from 'react';
import CreateUsername from './CreateUsername.tsx';
import './App.css';

function App() {
  const [showUserNameCreation, setShowUserNameCreation] = useState(true);
  const [username, setUsername] = useState('');

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
        <CreateUsername username={username} onValidate={validate} onInputChange={onInputChange} />
      )}
      {!showUserNameCreation && (
        <>
          <h1 className="text-2xl font-bold text-white my-10">Bienvenue, {username}</h1>
          <div className={'flex gap-10'}>
            <button className="bg-indigo-500 enabled:hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full w-max h-10 disabled:cursor-not-allowed disabled:opacity-50">
              Créer une partie
            </button>
            <button className="bg-gray-900 border-2 border-indigo-500 enabled:hover:border-indigo-300 enabled:hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full w-max h-10 disabled:cursor-not-allowed disabled:opacity-50">
              Rejoindre une partie
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default App;
