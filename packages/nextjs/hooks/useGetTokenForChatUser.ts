import {StreamChat} from 'stream-chat'

const useGetTokenForChatUser = (walletAddress: string):string =>{
    const api_key = process.env.NEXT_PUBLIC_GETSTREAM_API_KEY
    const servClient = StreamChat.getInstance(api_key);
    return servClient.devToken(walletAddress);
}

export default useGetTokenForChatUser;