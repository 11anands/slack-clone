// Importing React Files
import React from 'react'
import { useParams } from 'react-router-dom';

// Importing Project Files
import './Chat.component.css';

function Chat() {
    const { roomId } = useParams();
    return (
        <div>
            <div className="chat">
                <h2>You are in {roomId} room</h2>
            </div>
        </div>
    )
}

export default Chat;
