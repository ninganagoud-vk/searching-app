'use client'

import {  useState } from "react"

export const Counter = () => {
    const [val,setval]=useState(0)
    const [count,setCount]=useState(0)
    const [selectedVal,setSelect]=useState('')
    const [selectedMulVal,setMulSelect]=useState([])

        return(
            <div>
           <h1>{count}</h1>
           <button  onClick={()=>setCount(prev=>prev+1)}>
               Increment
            </button>
            <input  name="count" type="number" value={val} onChange={(e)=>setval(parseInt(e.target.value))}/>
            <button  onClick={()=>setCount(val)}>
               Set
            </button>

            <select   value={selectedVal} onChange={(e)=>setSelect(e.target.value)}>
                <option value={'A'}>
A
                </option>
                <option value={'B'}>
B
                </option>
                <option value={'C'}>
C
                </option>
            </select>
            <select multiple name="multiselect"   value={selectedMulVal} onChange={(e)=>setMulSelect(prev=>[...prev,e.target.value])}>
                <option value={'X'}>
X
                </option>
                <option value={'Y'}>
Y
                </option>
                <option value={'Z'}>
Z
                </option>
            </select>
           </div>
        )
    }

export default Counter