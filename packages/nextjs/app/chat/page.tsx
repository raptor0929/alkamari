"use client";
import 'stream-chat-react/dist/css/v2/index.css';
import { useWallets } from '@privy-io/react-auth';
import { Chat, Channel, ChannelList, Window, MessageList, MessageInput, Thread, useChatContext} from 'stream-chat-react';


const OrderChat = () => {

    const anouncetId = "asdasdasd";

    const GetCounterPartyWalletAddress = (anounceId : string)=>{
        console.log(anounceId);
        return "test2"
    }

    const { client } = useChatContext();  
    const {ready , wallets} = useWallets();  
    const walletAddress = ready ? wallets[0]?.address : '';
    const filters = { members: { $in: [walletAddress] }, type: 'messaging' };
    const options = { presence: true, state: true };

    const channel = client.channel('messaging', {
        members: [walletAddress, GetCounterPartyWalletAddress(anouncetId)],
    });
  
    return (
      <Chat client={client}>
        <ChannelList filters={filters} options={options} />
        <Channel channel={channel} >
          <Window >
            <MessageList />
            <MessageInput />
          </Window>
          <Thread />
        </Channel>
      </Chat>
    );
};

export default OrderChat;