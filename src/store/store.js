import { createStore } from "redux";


const store = createStore((state,action)=>{
    if(action.type === 'cahnge-categorieValue'){
        return {
            ...state,
            categorie:action.value
        }
    }
    if(action.type === 'render'){
        return {
            ...state,
            render:Math.random()
        }
    }
    if(action.type === 'add-images'){
        return {
            ...state,
            images:[ 
                ...state.images,
                ...action.value
            ]
        }
    }
    if(action.type === 'clear-images'){
        return {
            ...state,
            images:[]
        }
    }

    return state

},{
    images:[],
    categorie:1,
    render:Math.random()
})


export default store