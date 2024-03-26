interface CreateUsernameProps {
  active?: boolean;
  disabled?: boolean;
  children: string;
  onClick?: () => void;
}

const Button: React.FC<CreateUsernameProps> = ({
  active = true,
  disabled = false,
  children,
  onClick
}) => {
  return (
    <>
      <button
        onClick={onClick}
        disabled={disabled}
        className={
          active
            ? 'bg-indigo-500 enabled:hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full w-max h-10 disabled:cursor-not-allowed disabled:opacity-50'
            : 'bg-gray-900 border-2 border-indigo-500 enabled:hover:border-indigo-300 enabled:hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full w-max h-10 disabled:cursor-not-allowed disabled:opacity-50'
        }>
        {children}
      </button>
    </>
  );
};

export default Button;
