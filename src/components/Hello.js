import React, { useEffect, useState } from 'react'

export default function Hello() {
    const [name, setName] = useState("")
    
    const handleChange = (event) => {
        const value = event.target.value
        setName(value)
    }

    useEffect(() => {
        if (name.length >= 10) {
            alert("Your name is too long, we don't have unlimited storage you know!")
            setName(name.substring(0,5))
        }
    }, [name])

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
