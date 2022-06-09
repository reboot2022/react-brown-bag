import { addDoc, collection } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'

// Since we are using Firestore in this file, we need to import it.
import { db } from '../Util/firebase'

export default function Hello() {
    // Creates a state called name, a setter called setName. Initial state of ""
    const [name, setName] = useState("")

    // This function handles input to the text field.
    const handleChange = (event) => {
        const value = event.target.value
        setName(value)
    }

    // This function handles the creation and publishing of a new document.
    const sendSignature = async () => {
        // https://firebase.google.com/docs/firestore/manage-data/add-data
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
            {/* Ternary operator - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator */}
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
