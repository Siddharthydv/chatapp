import { forwardRef } from "react"
import React from "react"
const Input=React.forwardRef(({label, name, onChange, onBlur},ref)=>{
    return (
        <div className="flex flex-col  w-10/12 space-y-1 ">
            <label className="font-semibold font-sans text-lg">{label}</label>
            <input  name={name} onChange={onChange} onBlur={onBlur} className="border-b focus:outline-none bg-black" type="text" ref={ref}></input>
        </div>
    )
})
export default Input