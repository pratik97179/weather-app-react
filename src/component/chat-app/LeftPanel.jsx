import '../../styles/chat-app/chat-header.css'
import ChatList from './ChatList.jsx';
import Header from './Header.jsx';

const LeftPanel = () => {
    return (
        <div className="left-panel">
            <Header />
            <ChatList />
        </div>
    );
};

export default LeftPanel;
