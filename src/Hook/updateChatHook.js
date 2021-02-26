import {useState} from "react";

export default (chat) => {
    const [chatList, setChatList] = useState(chat);

    const updateChat = (chat) => {
        setChatList(chat);
    }
    return { chatList, updateChat};
}