"use client";

import { Channel, Chat, MessageInput, MessageList, Thread, Window, useCreateChatClient } from "stream-chat-react";
import "stream-chat-react/dist/css/v2/index.css";
import useGetTokenForChatUser from "~~/hooks/useGetTokenForChatUser";

export interface IProps {
  from: string;
  members: string[];
}

const OrderChat = (props: IProps) => {
  const { from, members } = props;

  const client = useCreateChatClient({
    apiKey: process.env.NEXT_PUBLIC_GETSTREAM_API_KEY || "",
    tokenOrProvider: useGetTokenForChatUser(from),
    userData: { id: from },
  });

  const channel = client?.channel("messaging", {
    members: [...members],
  });

  if (!client) return <>loading</>;

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
