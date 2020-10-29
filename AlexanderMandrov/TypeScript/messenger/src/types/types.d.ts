type MessageType = {
  message: IMessage;
  user?: string;
  isBot?: boolean;
  deleteMessage: (id: string) => void;
};

type ChatType = {
  user: string;
  deleteMessage: (id: string) => void;
  getMessageList: () => Array<IMessage>;
};

type MessageFormType = {
  pushMessage: (message: string) => void;
};

type SpinnerType = {
  size?: number;
  color?: string;
};
