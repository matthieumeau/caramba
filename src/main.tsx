import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router.tsx';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import TopBar from './components/TopBar.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TopBar />
    <RouterProvider router={Router} />
  </React.StrictMode>
);
