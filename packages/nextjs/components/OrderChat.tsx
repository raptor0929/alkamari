"use client";

import { Channel, Chat, MessageInput, MessageList, Thread, Window, useChatContext } from "stream-chat-react";
import "stream-chat-react/dist/css/v2/index.css";

export interface IProps {
  from: string;
  to: string;
}

const OrderChat = (props: IProps) => {
  const { from, to } = props;
  const { client } = useChatContext();

  const channel = client.channel("messaging", {
    members: [to, from],
  });

  return (
    <Chat client={client}>
      <Channel channel={channel}>
        <Window>
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

export default OrderChat;
