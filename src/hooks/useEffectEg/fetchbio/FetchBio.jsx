import { useState, useEffect } from 'react'
import { fetchBio } from '../api';

const FetchBio = () => {
    const [person, setPerson] = useState("Alice");
    const [bio, setBio] = useState(null);

    useEffect(() => {
        async function startFetch() {
            setBio(null);
            const res = await fetchBio(person);
            if (!ignore) setBio(res)
        }
        let ignore = false;
        startFetch();
        return () => {
            ignore = true;
        }
    }, [person])

    return (
        <>
            <h2>Fetch Bio</h2>
            <select value={person} onChange={e => { setPerson(e.target.value) }}>
                <option value='bob'>Bob</option>
                <option value='alice'>alice</option>
                <option value='taylor'>taylor</option>
            </select>
            <hr />
            <p><i>{bio ?? 'Loading...'}</i></p>
        </>
    )
}
export default FetchBio
