
'use client'

import {  useState } from "react"

export const NewSearch = () => {
const [data,setData]=useState('')


        return(
            <div>
           <h1>New search</h1>
           <p>{data}</p>
          <input  onChange={(e)=>setData(e.target.value)}/>
            

           </div>
        )
    }

export default NewSearch