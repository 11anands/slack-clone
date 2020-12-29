// Importing Core React Module
import React from 'react';

// Importing Project Directory File
import './SidebarOption.component.css';

// Initializing the SidebarOption component
function SidebarOption({Icon, title}) {
    return (
        <div className="sidebaroption">
            {Icon && <Icon className="sidebaroption__icon"/>}
            {Icon ? (<h3>{title}</h3>):(<h3 className="sidebaroption__channel"><span className="sidebaroption__hash">#</span>{title}</h3>)}
        </div>
    );
};

// Exporting the SidebarOption Component
export default SidebarOption;
