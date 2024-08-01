import { forwardRef } from "react"
import React from "react"
const Input=React.forwardRef(({label, name, onChange, onBlur},ref)=>{
    return (
        <div className="flex flex-col border-2 w-10/12 border-solid">
            <label className="font-semibold">{label}</label>
            <input  name={name} onChange={onChange} onBlur={onBlur} className="border-2 border-solid rounded-md" type="text" ref={ref}></input>
        </div>
    )
})
export default Input