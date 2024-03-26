interface CreateUsernameProps {
  type?: 'button' | 'submit' | 'reset';
  active?: boolean;
  disabled?: boolean;
  children: string;
  onClick?: () => void;
}

const Button: React.FC<CreateUsernameProps> = ({
  type = 'button',
  active = true,
  disabled = false,
  children,
  onClick
}) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={
          active
            ? 'text-sm bg-indigo-500 enabled:hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full w-max h-10 disabled:cursor-not-allowed disabled:opacity-50'
            : 'text-sm bg-gray-900 border-2 border-indigo-500 enabled:hover:border-indigo-300 enabled:hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full w-max h-10 disabled:cursor-not-allowed disabled:opacity-50'
        }>
        {children}
      </button>
    </>
  );
};

export default Button;
