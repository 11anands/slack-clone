import React from 'react';
import './Sidebar.component.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';

function Sidebar() {
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
        </div>
    )
}

export default Sidebar
