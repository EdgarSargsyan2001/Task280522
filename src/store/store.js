import { createStore } from "redux";


const store = createStore((state,action)=>{
    if(action.type === 'cahnge-categorieValue'){
        return {
            ...state,
            categorie:action.value
        }
    }
    if(action.type === 'cahnge-limitValue'){
        return {
            ...state,
            limit:action.value
        }
    }

    return state

},{
    categorie:1,
    limit:10
})


export default store