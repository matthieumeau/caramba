declare namespace ChatSocket {
  interface EmitEvents {
    'user:login': (pseudo: string) => void;
    message: ({
      message,
      username,
      room
    }: {
      message: string;
      username: string;
      room: string | undefined;
    }) => void;
    join: (code: number | null) => void;
  }
  interface ListenEvents {
    'user:login': (code: number) => void;
    message: (message: string) => void;
    join: (code: number) => void;
  }
}
