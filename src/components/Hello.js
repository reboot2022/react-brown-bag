import React, { useEffect, useState } from 'react'

export default function Hello() {
    // Creates a state called name, and a setter called setName.
    const [name, setName] = useState("")
    
    // This function handles input to the text field.
    const handleChange = (event) => {
        const value = event.target.value
        setName(value)
    }

    // useEffect calls the callback function when the name changes.
    useEffect(() => {
        if (name.length >= 10) {
            alert("Your name is too long, we don't have unlimited storage you know!")
            setName(name.substring(0,5))
        }
    }, [name])

    // useEffect calls the callback function on component render
    useEffect(() => {
        alert("Welcome to my page!")
    }, [])

    return (
        <div style={{ backgroundColor: "yellow" }}>
                <input onChange={handleChange} value={name}/>
                {name.length > 0 ?
                <div>Hello, {name}</div>:
                <div>You too good for a name, huh?</div>
                }
        </div>
    )
}
