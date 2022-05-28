
import { useEffect, useState } from "react";

function useFetchcategories(){

    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState('')


    useEffect(()=>{
        
        setLoading(true)
        fetch(`https://api.thecatapi.com/v1/categories`)
        .then(resp=>resp.json())
        .then(resp=>setData(resp))
        .catch((err)=>setError(err))
        .finally(setLoading(false))

    },[])

    return {
        data,
        loading,
        error
    }
}


export default useFetchcategories