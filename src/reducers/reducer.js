const initial_state = [
                { id: 1, content: "buy milk" },
                { id: 2, content: "drink milk" },
                { id: 3, content: "go out" }
            ];
export function reducer(state=initial_state, action) {
    switch (action.type) {

        case "ADD_TODO":
        	console.log([...state, action.payload]);
            return ([...state, action.payload]);
        case "DELETE_TODO":
        	console.log("delete reducer called")
            return (state.filter((todo) => todo.id !== action.payload));

        default:
            return state;
    }
}