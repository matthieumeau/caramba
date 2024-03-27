import TopBar from './components/TopBar.tsx';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Router from './Router.tsx';
import SocketCtxProvider from './contexts/provider.tsx';

function App() {
  return (
    <>
      <TopBar />
      <SocketCtxProvider>
        <RouterProvider router={Router} />
      </SocketCtxProvider>
    </>
  );
}
export default App;
