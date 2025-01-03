import React, { useEffect } from 'react'
import { createConnection } from './chat.js';

// ! this is the custom hooks
const useChatRoom = ({ serverUrl, roomId }) => {
    useEffect(() => {
        const options = {
            serverUrl: serverUrl,
            roomId: roomId
        };
        const conn = createConnection(options);
        conn.connect();
        return () => {
            conn.disconnect();
        }
    }, [roomId, serverUrl])
}

export default useChatRoom


// let [serverUrl, setServerUrl] = useState('www.google.com')

//     useEffect(() => {
//         let conn = createConnection(serverUrl, roomId);
//         conn.connect();
//         return () => {
//             conn.disconnect();
//         };
//     }, [roomId, serverUrl]);

