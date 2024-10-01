

import {  useState } from "react"

export const useCounter = ({defaultVal=0}) => {
    const [count,setCount]=useState(defaultVal)
    const increment=()=>setCount(prev=>prev+1)
    const decrement=()=>setCount(prev=>prev-1)

    return {count,increment,decrement}
}