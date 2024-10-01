'use client'

import { useEffect, useState } from "react"

const Login = () => {
const [val,setval]=useState('Login')
    

    const handleClick=()=>setval(prev=>(prev=="Login")?'Logout':'Login')

    return(
        <div>
        <button onClick={handleClick}>
            {val}
        </button>
       </div>

    )
}

export const Logintimer = () => {
    const [val,setval]=useState('Login')
    const [count,setCount]=useState(0)

        
    useEffect(()=>{
        setTimeout(()=>{
            setval('Logout')
        },500)
    },[])    

        return(
            <div>
            <button >
                {val}
            </button>
            <button  onClick={()=>setCount(prev=>prev+1)}>
               Increment
            </button>
            <p>{count}</p>
           </div>
        )
    }

export default Login