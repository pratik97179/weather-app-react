import Chat from "./Chat.jsx";
import LeftPanel from "./LeftPanel.jsx";
import '../../styles/chat-app/chat-app.css';


const ChatApp = () => {
    return (
        <div className="chat-app-wrapper">
            <LeftPanel />
            <Chat />
        </div>
    );
};

export default ChatApp;
