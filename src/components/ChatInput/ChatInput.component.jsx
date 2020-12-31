import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import "./ChatInput.component.css";
import db from '../../firebase';
import { useStateValue } from '../../StateProvider'

function ChatInput({ channelName, channelId }) {
    const [ input, setInput ] = useState('');
    const sendMessage = e => {
        e.preventDefault();
        if (channelId){
            db.collection('room')
                .doc(channelId)
                .collection({
                    message: input,
                    timestamp: firebase.firestore.FieldValue.servertimestamp,
                    user: user.displayName,
                    userImage: userphotoURL,
                })
        }
    }
    return (
        <div className="chatInput">
            <form>
                <input 
                    value={input}
                    onChange={ e => setInput(e.target.value) }
                    placeholder={`Message #${channelName.toLowerCase()}`}
                />
                <button type="submit" onClick={sendMessage}>Send</button>
            </form>
        </div>
    )
}

export default ChatInput;