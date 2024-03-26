interface CreateUsernameProps {
  username: string;
  onValidate: () => void;
  onInputChange: () => void;
}

const CreateUsernameForm: React.FC<CreateUsernameProps> = ({
  username,
  onValidate,
  onInputChange
}) => {
  return (
    <>
      <div className="w-80 h-max bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Créer mon pseudo
          </h1>
          <div>
            <label htmlFor="pseudo" className="block mb-2 text-sm font-medium text-white text-left">
              Pseudo
            </label>
            <input
              type="text"
              id="pseudo"
              className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Mon pseudonyme"
              required
              onChange={onInputChange}
            />
          </div>
          <button
            className="bg-blue-500 enabled:hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full disabled:cursor-not-allowed disabled:opacity-50"
            disabled={!username.length}
            onClick={onValidate}>
            Jouer maintenant
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateUsernameForm;
