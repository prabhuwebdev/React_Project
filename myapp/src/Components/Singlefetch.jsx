import { useState,useEffect } from "react"

const Usefetch1=(url)=>{
    const[data,setdata]=useState(null)
    useEffect(()=>{
      const UseFetch=async()=>{
        try{
          const val= await fetch(url)
          const res= await val.json()
          setdata(res)
        }
        catch(Err){
          return Err.message
        }
        
      }
      UseFetch()
    },[url])
      return(
        [data]
      )
       
  
    }
  
  export default Usefetch1