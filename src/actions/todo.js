export const FETCHALLTODO = "fetch all";
export const ADDTODO = 'add todo';
export const UPDATETODO = 'update todo';
export const fetchAllTodos = ()=>{
    return {
        type: FETCHALLTODO,
        payload: [
            {
                name: "Shoutem App",
                complete:false
            },
            {
                name: "Rockwell Order",
                complete:false
            }
        ]
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