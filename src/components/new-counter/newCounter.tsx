
'use client'

import {  useState } from "react"

interface InewCounterType{
    count:number
    handleIncrement?:()=>void
    handleDecrement?:()=>void
}

export const NewCounter = ({
    count,handleIncrement,handleDecrement
}:InewCounterType) => {

        return(
            <div>
           <h1>New Counter</h1>
           <p>{count}</p>
           <button  onClick={handleIncrement}>
               Increment
            </button>
            <button  onClick={handleDecrement}>
            Decrement
            </button>

           </div>
        )
    }

export default NewCounter