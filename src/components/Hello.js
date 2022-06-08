import { addDoc, collection } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../Util/firebase'

export default function Hello() {
    // Creates a state called name, and a setter called setName.
    const [name, setName] = useState("")

    // This function handles input to the text field.
    const handleChange = (event) => {
        const value = event.target.value
        setName(value)
    }

    const sendSignature = async () => {
        const docRef = await addDoc(collection(db, "signatures"), {
            name: name
        });
        console.log("Signature written with ID: ", docRef.id);
    }

    // useEffect calls the callback function when the name changes.
    useEffect(() => {
        if (name.length >= 20) {
            alert("Your name is too long, we don't have unlimited storage you know!")
            setName(name.substring(0, 19))
        }
    }, [name])

    // useEffect calls the callback function on component render
    useEffect(() => {
        alert("Welcome to the signature book!")
    }, [])

    return (
        <div style={{ backgroundColor: "gray", textAlign: 'center', borderRadius: 5 }}>
            {name.length > 0 ?
                <h1>Hello, {name}</h1> :
                <h1>You too good for a name, huh?</h1>
            }
            <input onChange={handleChange} value={name} style={{marginBottom: '1rem'}}/>
            <br />
            <button style={{ backgroundColor: "green", border: 0, borderRadius: 5}} onClick={sendSignature}>Send signature</button>
        </div>
    )
}
