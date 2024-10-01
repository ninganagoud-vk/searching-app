import { IDetailResponse, IErrorObject, IListingResponse } from "@/interfaces/recipe";
import axios from "axios";

export const getRecipies = async(params: any) : Promise<IListingResponse|undefined>=>{
    try{
        let response: Response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v2?${params}`)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
     const data:IListingResponse = await response.json()
         if(response.status==200){
            return data
         }
    }
  catch (err) {
      const error = err as IErrorObject; // Type assertion
      if (error.response && error.response.status === 401) {
        // Handle 401 Unauthorized errors (e.g., redirect to login)
        console.log('console', error.response)
        window.location.href = '/';
      }
    }
}

export const getPosts = async() : Promise<IListingResponse|undefined>=>{
  try{
      let response: Response = await fetch('https://jsonplaceholder.typicode.com/posts')
      
   const data:IListingResponse = await response.json()
       if(response.status==200){
          return data
       }
  }
catch (err) {
    const error = err as IErrorObject; // Type assertion
    if (error.response && error.response.status === 401) {
      // Handle 401 Unauthorized errors (e.g., redirect to login)
      console.log('console', error.response)
      window.location.href = '/';
    }
  }
}



export const getRecipeById =async (id: string | string[], params: string): Promise<IDetailResponse|undefined> =>{
try{
    const response: Response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v2/${id}?${params}`)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data: IDetailResponse = await response.json()
    if (response?.status == 200) {
return data
    }
}
catch (err) {
    const error = err as IErrorObject; // Type assertion
    if (error.response && error.response.status === 401) {
      // Handle 401 Unauthorized errors (e.g., redirect to login)
      console.log('console', error.response)
      window.location.href = '/';
    }
  }
   
    

} 



// axios

export const getAxiosAlbums = async() : Promise<any|undefined>=>{
  try{
      let response: Response = await axios.get('https://jsonplaceholder.typicode.com/albums')
      
       if(response.status==200){
          return response
       }
  }
catch (err) {
    const error = err as IErrorObject; // Type assertion
    if (error.response && error.response.status === 401) {
      // Handle 401 Unauthorized errors (e.g., redirect to login)
      console.log('console', error.response)
      window.location.href = '/';
    }
  }
}



export const fetchWeatherData = async (): Promise<any|undefined> => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  return await response.json();
};