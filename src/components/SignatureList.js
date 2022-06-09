import { collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../Util/firebase';

export default function SignatureList() {

    // Creates a state called signatures, a setter called setSignatures. Initial state of []
    const [signatures, setSignatures] = useState([])

    // This is a bit of a complex example.
    // We are going to be using the onSnapshot function, which keeps a live
    // connection to our database.
    // You can read about this: https://firebase.google.com/docs/firestore/query-data/get-data
    
    useEffect(() => {
        // Create a reference to the collection we want to retrieve data from.
        const colref = collection(db, 'signatures');
        const unsub = onSnapshot(colref, (snap) => {
            let x = []
            snap.docs.forEach((doc) => {
                x.push(doc.data())
            })
            setSignatures(x)
        })
        // This might look a bit funky, but when you return a value from useEffect, it executes when the component is destroyed.
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
