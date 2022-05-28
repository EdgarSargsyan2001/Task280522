import { useDispatch } from "react-redux"
import useFetchcategories from "../../useFetchHooks/useFetchcategories"
import './SelectContent.css'


function SelectContent(){

    const dispatch = useDispatch()
    const {data} = useFetchcategories()

    const SelectChange = (val) => {
        dispatch({
            type:'cahnge-limitValue',
            value:10
        })
        dispatch({
            type:'cahnge-categorieValue',
            value:val
        })
    }

    return(
      <div className='Nav'>
        <div className="categorieDiv">
            {
                data.map( el => {
                    return(
                        <span 
                            key={el.id} 
                            value={el.id}
                            className='item'
                            onClick={()=>SelectChange(el.id)}

                        >{el.name}</span>
                    )
                })
            }
            
        </div>
      </div>
    )
}


export default SelectContent