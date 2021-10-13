import React, { useState } from 'react'

export default function PhoneInput(props) {
    const encode = (str) => {
        if(!str) return null;
        var p1, p2, p3
        if(str.slice(0, 2) == 11 || str.slice(0, 2) == 15) {
            p1 = str.slice(0, 2)
            p2 = str.slice(2, 6)
            p3 = str.slice(6, 10)
        }
        else {
            p1 = str.slice(0, 3)
            p2 = str.slice(3, 6)
            p3 = str.slice(6, 10)
        }
        return p1 + (p2?" "+p2:"") + (p3?"-"+p3:"")
    }
    const decode = (str) => str.replace(/ |\-/g, "")

    const [value, setValue] = useState(encode(props.value));

    const handleChange = (e) => {
        setValue(encode(decode(e.target.value)))
        props.onChange(e.target.value)
    }
    return (
        <input {...props} onChange={handleChange} maxLength="13" value={value}/>
    )
}