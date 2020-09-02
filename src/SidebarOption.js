import React from 'react'
import './SidebarOption.css'
import { useHistory } from 'react-router-dom'
import db from './firebase'

function SidebarOption({Icon, title,id, addChannelOption}) {

    const history = useHistory(); // hook which make it really easy to go back and forward 

    const selectChannel = () => {
        if(id){
            history.push(`/room/${id}`)
        }else{
            history.push(title)
        }
    }

    const addChannel = () => {
        const channelName = prompt("Please enter channel name");
        db.collection('rooms').add({
            name : channelName,
        })
    };
    
    return (
        <div 
            className="sidebarOption"
            onClick={addChannelOption ? addChannel : selectChannel}
        >
            
            {Icon && <Icon className="sidebarOption__icon"/>}      {/* if you pass icon as a prop than render out th Icon  */}
            {Icon ? (
                <h3>{title}</h3>
            ) : (
            <h3 className="sidebarOption__channel">
                <span className="sidebarOption__hash">#</span>    
                {title}
            </h3>
            ) }
        </div>
    );
}

export default SidebarOption
