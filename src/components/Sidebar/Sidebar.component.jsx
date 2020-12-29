// Importing Core React Module
import React, { useState, useEffect } from 'react';

// Importing Project Directory File
import './Sidebar.component.css';
import SidebarOption from '../SidebarOption/SidebarOption.component';
import db from '../../firebase';

// Importing Third Party Modules
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';

// Initializing the Sidebar component
function Sidebar() {
    const [channels, setChannels] = useState([]);
    useEffect(() => {
        db.collection('room').onSnapshot(snapshot => (
            setChannels(snapshot.docs.map(doc => ({
                id: doc.id,
                name: doc.data().name
            })))
        ))
    }, []);

    return (
        <div className='sidebar'>
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>11anands</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Anand Sharan
                    </h3>
                </div> 
                <CreateIcon />
            </div>
            {/* Adding SidebarOption component 
                which we hav created */}
            <SidebarOption Icon={InsertCommentIcon} title={"Threads"}/>
            <SidebarOption Icon={InboxIcon} title={"Mention & Reactions"}/>
            <SidebarOption Icon={DraftIcon} title={"Saved Items"}/>
            <SidebarOption Icon={BookmarkBorderIcon} title={"Channel Browser"}/>
            <SidebarOption Icon={PeopleAltIcon} title={"People & User Group"}/>
            <SidebarOption Icon={AppsIcon} title={"Apps"}/>
            <SidebarOption Icon={FileCopyIcon} title={"File Browser"}/>
            <SidebarOption Icon={ExpandLessIcon} title={"Show Less"}/>
            <hr/>
            <SidebarOption Icon={ExpandMoreIcon} title={"Channels"}/>
            <hr/>
            <SidebarOption Icon={AddIcon} title={"Add Channel"}/>

            {/* Connect to dB and list all the channels */}
            {/* SidebarOption...mapping */}
            {channels.map(channel => (
                <SidebarOption title={channel.name} id={channel.id} />
            ))}
        </div>
    )
}

// Exporting the Sidebar component
export default Sidebar;
