const TopBar = () => {
  return (
    <>
      <div className="w-full h-max flex items-center px-5 py-2 bg-gray-900">
        <a href="/">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-100 to-indigo-500 inline-block text-transparent bg-clip-text">
            Caramba
          </h2>
          <h3 className="text-xs text-white">the Card Game</h3>
        </a>
      </div>
    </>
  );
};

export default TopBar;
