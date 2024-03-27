import { ReactNode, useRef } from 'react';
import { io } from 'socket.io-client';
import { SocketCtx, MySocket } from './sockets';

const SocketCtxProvider = (props: { children?: ReactNode }) => {
  const socketRef = useRef<MySocket>(io('http://localhost:5000', { autoConnect: false }));

  return (
    <SocketCtx.Provider value={{ socket: socketRef.current }}>{props.children}</SocketCtx.Provider>
  );
};

export default SocketCtxProvider;
