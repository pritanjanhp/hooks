import React, { useState } from 'react'
import ChatServer from './ChatServer.jsx';

const ChatApp = () => {
    let [roomId, setRoomId] = useState('general');
    let [show, setShow] = useState(false);

    return (
        <>
            <h4>ChatApp</h4>
            <label>
                Choose the chat room :
                <select value={roomId} onChange={e => setRoomId(e.target.value)} >
                    <option value="general" >General</option>
                    <option value="travel">Travel</option>
                    <option value='music'>Music</option>
                </select>
            </label>

            <button onClick={() => setShow(!show)}>
                {show ? 'close chat' : 'open chat'}
            </button>
            <hr />
            {show && <ChatServer roomId={roomId} />}
        </>
    )
}

export default ChatApp