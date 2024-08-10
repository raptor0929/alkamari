import { useWallets } from "@privy-io/react-auth";
import { Chat, useCreateChatClient } from "stream-chat-react"
import useGetTokenForChatUser from "~~/hooks/useGetTokenForChatUser";

const ChatContext = ({ children }: { children: React.ReactNode })=>{
    const {ready , wallets} = useWallets();
    const walletAddress = ready ? wallets[0]?.address : '';

    const client = ready && useCreateChatClient({
        apiKey: process.env.NEXT_PUBLIC_GETSTREAM_API_KEY || '',
        tokenOrProvider: useGetTokenForChatUser(walletAddress),
        userData: { id: walletAddress },
    });

    if (!client) return <></>;
    
    return (
      <Chat client={client}>
        {children}
      </Chat>
    );
}

export default ChatContext;