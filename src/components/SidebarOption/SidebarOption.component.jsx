// Importing Core React Module
import React from 'react';

// Importing Project Directory File
import './SidebarOption.component.css';
import { useHistory } from 'react-router-dom';
import db from '../../firebase';

// Initializing the SidebarOption component
function SidebarOption({Icon, title, id, addChannelOption}) {
    const history = useHistory();
    const selectChannel = () => {
        if(id){
            history.push(`/room/${id}`)
        } else {
            history.push(title)
        }
    };

    const addChannel = () => {
        const channelName = prompt('Please enter the channel name');
        if (channelName){
            db.collection('room').add({
                name: channelName,
            })
        }
    };

    return (
        <div className="sidebaroption" onClick={ addChannelOption ? addChannel : selectChannel}>
            {Icon && <Icon className="sidebaroption__icon"/>}
            {Icon ? (<h3>{title}</h3>):(<h3 className="sidebaroption__channel"><span className="sidebaroption__hash">#</span>{title}</h3>)}
        </div>
    );
};

// Exporting the SidebarOption Component
export default SidebarOption;
