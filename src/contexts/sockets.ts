import { createContext, useContext } from 'react';
import { Socket } from 'socket.io-client';

export type MySocket = Socket<ChatSocket.ListenEvents, ChatSocket.EmitEvents>;

export interface SocketCtxState {
  socket: MySocket;
}

export const SocketCtx = createContext<SocketCtxState>({} as SocketCtxState);

export const useSocketCtx = () => useContext(SocketCtx);
