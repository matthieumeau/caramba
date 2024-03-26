import TopBar from './components/TopBar.tsx';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Router from './Router.tsx';

function App() {
  return (
    <>
      <TopBar />
      <RouterProvider router={Router} />
    </>
  );
}
export default App;
