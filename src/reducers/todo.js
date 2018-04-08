import { FETCHALLTODO,ADDTODO,UPDATETODO,DELETETODO } from "../actions/todo";
export default function(state=[],action){
    switch(action.type)
    {
        case FETCHALLTODO:return action.payload;
        case ADDTODO: return [...state,action.payload];
        case UPDATETODO: {
            const nextState = state.map(s=>{
                if(s.name===action.payload.name)
                    s.complete = action.payload.complete;
                return s;
            });
            return nextState;
        }
        case DELETETODO: {
            const nextState = state.reduce((init,ele)=>{
                if(ele.name!==action.payload.name)
                    init.push(ele);
                return init;
            },[]);
            return nextState;
        }
        default: return state;
    }
};