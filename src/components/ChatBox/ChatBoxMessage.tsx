const ChatBoxMessage = () => {
  return (
    <>
      <div className="flex items-start gap-2.5">
        <img
          className="w-8 h-8 rounded-full"
          src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
          alt="Jese image"
        />
        <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-2 border-gray-200 rounded-e-xl rounded-es-xl bg-gray-700">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-xs font-semibold text-white">Bonnie Green</span>
            <span className="text-[10px] font-normal text-gray-400">11:46</span>
          </div>
          <p className="text-[10px] font-normal pt-2.5 text-white text-left">
            That's awesome. I think our users will really appreciate the improvements.
          </p>
        </div>
      </div>
    </>
  );
};

export default ChatBoxMessage;
