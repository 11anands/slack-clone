// Importing React Files
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

// Importing Project Files
import './Chat.component.css';
import Messages from '../Messages/Messages.component';

// Importing Third Party Modules
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import db from '../../firebase';
// import { Message } from '@material-ui/icons';

function Chat() {
    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMessages, setRoomMessages] = useState([]);

    useEffect(() => {
        if (roomId) {
            db.collection('room')
                .doc(roomId)
                .onSnapshot(snapshot => (
                    setRoomDetails(snapshot.data())
            ));
        }

        db.collection('room')
            .doc(roomId)
            .collection('messages')
            .orderBy('timestamp', 'asc')
            .onSnapshot((snapshot) =>
                setRoomMessages(snapshot.docs.map((doc) => doc.data())));
    }, [roomId]);

    console.log(roomDetails);

    return (
            <div className="chat">
                <div className="chat__header">
                    <div className="chat__headerLeft">
                        <h4 className="chat__channelName">
                            <strong>#{roomDetails?.name}</strong>
                            <StarBorderOutlinedIcon />
                        </h4>
                    </div>
                    <div className="chat__headerRight">
                        <p>
                            <InfoOutlinedIcon /> Details
                        </p> 
                    </div>
                </div>
                <div className="chat__messages">
                    {roomMessages.map(({message, timestamp, user, userImage}) => (
                        <Messages
                            message = {message}
                            timestamp = {timestamp}
                            user = {user}
                            userImage = {userImage}
                        />
                    ))}
                </div>
            </div>
    )
}

export default Chat;
