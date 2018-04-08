export const FETCHALLTODO = "fetch all";
export const ADDTODO = 'add todo';
export const UPDATETODO = 'update todo';
export const DELETETODO = 'delete todo';
export const fetchAllTodos = ()=>{
    return {
        type: FETCHALLTODO,
        payload: []
    };
};

export const addTodo =(name)=>{
    return {
        type:ADDTODO,
        payload: {name,complete:false} 
    };
};

export const updateTodo = (name,complete)=>{
    return {
        type:UPDATETODO,
        payload:{name,complete}
    }
}

export const deleteTodo = (name) =>{
    return {
        type: DELETETODO,
        payload: {name}
    }
}
