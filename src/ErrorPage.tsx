import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div className="h-max w-full flex flex-col justify-center items-center relative">
        <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
        <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute top-1/3">
          Page Not Found
        </div>
        <button className="mt-10 bg-gray-900 border-2 border-indigo-500 enabled:hover:border-indigo-300 enabled:hover:bg-gray-800 text-white text-sm px-4 rounded-full w-max h-max disabled:cursor-not-allowed disabled:opacity-50">
          <a href="/">Retourner à l'accueil</a>
        </button>
      </div>
    </div>
  );
}
