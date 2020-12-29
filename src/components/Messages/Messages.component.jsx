// Importing React Files
import React from 'react';

// Importing Project Files
import './Messages.component.css';


function Messages({ message, timestamp, user, userImage}) {
    return (
        <div className="message">
            
            <div className="message__info">
                <h4>
                    <img src={ userImage } alt=""/>
                    {user} timestamp...
                </h4>
                <p>
                    {message}
                </p>
            </div>
        </div>
    );
};

export default Messages;
