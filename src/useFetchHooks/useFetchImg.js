import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";


function useFetchImg(id = 1,render){

    // const [data,setData] = useState([])
    const dispatch = useDispatch()

    const [loading,setLoading] = useState(false)
    const [error,setError] = useState('')
    
    useEffect(()=>{
        setLoading(true)

        fetch(`https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${id}`)
        .then(resp=>resp.json())
        .then(resp=>dispatch({
            type:'add-images',
            value:resp
        }))
        .catch((err)=>setError(err))
        .finally(()=>setLoading(false))

    },[id,render])

    return {
        // data,
        loading,
        error
    }

}


export default useFetchImg