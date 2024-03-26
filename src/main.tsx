import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import ErrorPage from './ErrorPage.tsx';
import GameRoom from './GameRoom.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import TopBar from './TopBar.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: '/room/:id',
    element: <GameRoom />,
    errorElement: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TopBar />
    <RouterProvider router={router} />
  </React.StrictMode>
);
