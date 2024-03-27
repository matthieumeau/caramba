const ChatBoxMessage = ({ message }: { message: string }) => {
  let avatarUrl = `/src/assets/avatars/avatar_${Math.floor(Math.random() * (20 - 1 + 1) + 1)}.svg`;

  return (
    <>
      <div className="flex items-start gap-2.5">
        <img src={avatarUrl} alt="" className="w-8 h-8 rounded-full" />
        <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-2 border-gray-200 rounded-e-xl rounded-es-xl bg-gray-700">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-xs font-semibold text-white">Bonnie Green</span>
            <span className="text-[10px] font-normal text-gray-400">11:46</span>
          </div>
          <p className="text-[10px] font-normal pt-2.5 text-white text-left">{message}</p>
        </div>
      </div>
    </>
  );
};

export default ChatBoxMessage;
