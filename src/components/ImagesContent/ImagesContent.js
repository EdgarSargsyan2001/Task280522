import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import useFetchImg from "../../useFetchHooks/useFetchImg"
import './ImagesContent.css' 


function ImagesContent({home}){
    
    const dispatch = useDispatch()

    const categorie = useSelector((state)=>state.categorie)
    const render = useSelector((state)=>state.render)
    const data = useSelector((state)=>state.images)
    
    const {loading} = useFetchImg(!home?categorie:home,render)
    
    const chlickMore = () => dispatch({type:'render'})

    useEffect(()=>{
        dispatch({type:'clear-images'})
        
    },[])

    return(
        <div className="imageContent">
      
            {
               data.map(el=> <img 
                                key={el.id + Math.random()} 
                                src={el.url} 
                                alt={el.url}
                                className='image' 
                            />
                        )
            }

            <button 
                onClick={chlickMore}
                className='moreButton'
            
            >{loading?'loaging...':'Add 10 images'}</button>

        </div>
    )
}

export default ImagesContent