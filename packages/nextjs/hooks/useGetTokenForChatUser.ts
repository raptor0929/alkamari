import {StreamChat} from 'stream-chat'

const useGetTokenForChatUser = (walletAddress: string):string =>{
    const api_key = '37by5uw54nyb'
    const servClient = StreamChat.getInstance(api_key);
    return servClient.devToken(walletAddress);
}

export default useGetTokenForChatUser;