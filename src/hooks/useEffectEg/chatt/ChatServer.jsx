import React, { useState, useEffect } from 'react'
import { createConnection } from './chat.js';
import useChatRoom from './useChatRoom.jsx';

const ChatServer = ({ roomId }) => {
    // ! creating a new component to show custom hooks

    // let [serverUrl, setServerUrl] = useState('www.google.com')

    // useEffect(() => {
    //     let conn = createConnection(serverUrl, roomId);
    //     conn.connect();
    //     return () => {
    //         conn.disconnect();
    //     };
    // }, [roomId, serverUrl]);

    // ! and then using it like this 

    let [serverUrl, setServerUrl] = useState('www.google.com')
    useChatRoom({
        roomId: roomId,
        serverUrl: serverUrl
    });

    return (
        <>
            <h3>Chat Server</h3>
            <label>
                Server URL:
                <input value={serverUrl} onChange={e => setServerUrl(e.target.value)} />
            </label>
            <h1>Welcome to {roomId} room</h1>
        </>
    )
}

export default ChatServer;
