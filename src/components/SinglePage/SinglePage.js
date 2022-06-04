import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import ImagesContent from "../ImagesContent/ImagesContent"


function SinglePage(){

    const {id} = useParams()
    const dispatch = useDispatch()
    dispatch({
        type:'cahnge-categorieValue',
        value:id
    })


    return <ImagesContent />

}

export default SinglePage