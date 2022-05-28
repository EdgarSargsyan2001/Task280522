import { useDispatch, useSelector } from "react-redux"
import useFetchImg from "../../useFetchHooks/useFetchImg"
import './ImagesContent.css' 


function ImagesContent(){

    
    const categorie = useSelector((state)=>state.categorie)
    const limit = useSelector((state)=>state.limit)
    const dispatch = useDispatch()
    
    const {data,loading} = useFetchImg(categorie,limit)

    const chlickMore = () => {
        dispatch({
            type:'cahnge-limitValue',
            value:limit + 10
        })
    }

    return(
        <div className="imageContent">
      
            {
               data.map(el => <img 
                                key={el.id} 
                                className='image' 
                                src={el.url} 
                                alt={el.url}
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