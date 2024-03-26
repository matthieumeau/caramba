import { createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import ErrorPage from './ErrorPage.tsx';
import GameRoom from './pages/GameRoom.tsx';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: '/room/:roomId',
    element: <GameRoom />,
    errorElement: <ErrorPage />
  }
]);

export default Router;
