import React, { useState, useEffect } from 'react'
import './Chat.css';
import {useParams} from 'react-router-dom';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from './firebase'
import Message from './Message';
import ChatInput from './ChatInput'

function Chat() {
    const {roomId} = useParams();
    const [roomDetails, setRoomDetails] = useState(null)
    const [roomMessages, setroomMessages] = useState([])

    //runs when the commponents loads or anything changes
    useEffect(() => {
        if (roomId) {
            db.collection('rooms')
                .doc(roomId)
                .onSnapshot(snapshot => (
                    setRoomDetails(snapshot.data())
                ))
        }

        // messages of rooms
        db.collection('rooms')
            .doc(roomId)
            .collection('messages')
            .orderBy('timestamp','asc')
            .onSnapshot((snapshot) => (
                setroomMessages(
                    snapshot.docs.map(doc => doc.data())
                )
            ))

    }, [roomId]) //update this code every time roomId changes

    console.log(roomDetails)
    console.log("MESSAGES >>>", roomMessages)

    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">                    
                    
                    <h4 className="chat__channelName">
                        {/* just like try catch but works instatantly code won't die came from swift */}
                        <strong>#{roomDetails?.name}</strong> 
                        <StarBorderOutlinedIcon/>
                    </h4>

                </div>
                <div className="chat__headerRight">
                    <p>
                        <InfoOutlinedIcon/>Details
                    </p>
                </div>
            </div>

            <div className="chat__messages">
                 {/*< Message .. >  */}
                 {roomMessages.map(({message, timestamp, userImage, user}) => (
                    <Message
                    
                    message={message}
                    timestamp={timestamp}
                    user={user}
                    userImage={userImage}
                    
                    />
                 ))}
            </div>

            <ChatInput channelName={roomDetails?.name} channelId={roomId}/>

        </div>
    )
}

export default Chat
