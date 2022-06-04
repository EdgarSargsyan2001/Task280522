import { Link } from "react-router-dom"
import useFetchcategories from "../../useFetchHooks/useFetchcategories"
import './SelectContent.css'


function SelectContent(){

    const {data} = useFetchcategories()

    return(
      <div className='categories'>
        <ol>
            {
              data.map(el => {
                return(
                    <Link key={el.id} to={`/category/${el.id}`}>
                        <li className='item' >{el.name}</li>
                    </Link>
                )
              })
            }
        </ol>
      </div>
    )
}


export default SelectContent