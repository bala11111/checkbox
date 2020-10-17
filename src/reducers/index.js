import {ADD_BOX , REMOVE_BOX} from '../actions';

const initialState = {
    list : []
}

export default function helper(state= initialState,action)
{


    switch(action.type)
    {
        case ADD_BOX :
            return {
                ...state,
                list : [action.box,...state.list]
            }

        case REMOVE_BOX:
            const filteredArray = state.list.filter(
                item => item !== action.box
            );  

            return {
                ...state,
                list : filteredArray
            }

            default : return state
    }
}