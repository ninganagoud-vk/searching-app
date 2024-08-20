'use client';

import  { getRecipies } from "@/apis/index";
import { useEffect, useState } from "react";

 
    const Recipies =  () => {
        const [recipes,setRecipies]=useState([])

        const getData=async()=>{
            const response = await  getRecipies({
                type:'public',
                app_id:"b72bb112",
                app_key:'c4615d10a88089afc5050da5f9f84f18',
                q:'q'
            })
            setRecipies(response.data?.hits)
          console.log('response',)
        }

        useEffect(()=>{
            getData()
        },[])

        console.log('recipes',recipes)
    
  return (
    <div>
   nkn
   {recipes?.length?recipes.map((item:any)=><img src={item?.recipe?.image}/>):''}
    </div>
  )
}

export default Recipies
