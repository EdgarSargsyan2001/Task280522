import { useEffect, useState } from "react";


function useFetchImg(id = 1,limit = 10){

    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState('')


    useEffect(()=>{
        setLoading(true)
        fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}&page=1&category_ids=${id}`)
        .then(resp=>resp.json())
        .then(resp=>setData(resp))
        .catch((err)=>setError(err))
        .finally(()=>setLoading(false))

    },[id,limit])

    return {
        data,
        loading,
        error
    }

}


export default useFetchImg