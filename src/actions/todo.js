export const FETCHALLTODO = "fetch "
export const fetchAllTodos = ()=>{
    return {
        type: FETCHALLTODO,
        payload: [
            {
                id:1,
                name: "Shoutem App"
            },
            {
                id:2,
                name: "Rockwell Order"
            }
        ]
    };
};