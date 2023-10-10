import { useEffect, useState } from "react";

import "../../styles/chat-app/chat-header.css";
import getChats from "../../services/get-chats.js";

const ChatList = () => {
    const [chats, setchats] = useState({});

    useEffect(() => {
        get();
    });

    async function get() {
        let resp = await getChats();
        console.log(resp);
    }
    
    return <div className="chat-list">Chat list</div>;
};

export default ChatList;
