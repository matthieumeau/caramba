import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './ErrorPage.tsx';
import GameRoom from './pages/GameBox.tsx';
import Index from './pages/Index.tsx';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    errorElement: <ErrorPage />
  },
  {
    path: '/room/:roomId',
    element: <GameRoom />,
    errorElement: <ErrorPage />
  }
]);

export default Router;
