import { FETCHALLTODO } from "../actions/todo";
export default function(state=[],action){
    switch(action.type)
    {
        case FETCHALLTODO:return action.payload;
        default: return state;
    }
};