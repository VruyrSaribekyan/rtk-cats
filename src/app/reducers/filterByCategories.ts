import { Action, AnyAction, Reducer } from "@reduxjs/toolkit";

interface ICategory{
    id:string,
    url:string,
    width?:string,
    height?:string
}
interface ICategoryState {
    category_ids?: number
}


const initialState: ICategoryState = {}

const filterByCategories: Reducer<ICategoryState> = (state=initialState, action)=>{
    switch(action.type){
        case "singleCategory":
            return {
                ...state, 
                category_ids: action.category_ids
            }
            default:
                 return state
    }
}
export default filterByCategories
