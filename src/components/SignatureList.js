import { collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../Util/firebase';

export default function SignatureList() {

    const [signatures, setSignatures] = useState([])

    useEffect(() => {
        const colref = collection(db, 'signatures');
        const unsub = onSnapshot(colref, (snap) => {
            let x = []
            snap.docs.forEach((doc) => {
                x.push(doc.data())
            })
            setSignatures(x)
        })
        return unsub
    }, [])

    return (
        <>
            <h1>Past Signatures</h1>
            <ul>
                {signatures.map((sig, i) => {
                    return <li key={i}>{sig.name}</li>
                })}
            </ul>
        </>
    )
}
