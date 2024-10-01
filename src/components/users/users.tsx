'use client';

import React, { useEffect, useState } from "react";

const Users: React.FC = () => {
  const [users, setUsers] = useState<any[] | undefined>([])
  const [err, setErr] = useState('')

  const getData = async () => {
    try {
     let response: any = await fetch('https://jsonplaceholder.typicode.com/users')
     response=await response.json()
      setUsers(response?.map((item:any)=>item.name))
    }
    catch (err) {
      console.log('console', err)
      setErr("Error while fetching data")
    }
  } 

  useEffect(() => {
    getData()
  }, [])


  return(
    <div>
        <div>
            parent
            <p>
                child
            </p>
        </div>
        <h1>Users</h1>
        {err&&<p>{err}</p>}
        <ul>
            {users?.map(item=><li key={item}>{item}</li>)}
        </ul>
    </div>
  )
}

export default Users