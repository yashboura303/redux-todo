export const ADD = "ADD_TODO";
export const DELETE = "DELETE_TODO";

export function deleteTodo(id) {
	console.log("delete action called")
    return { type: DELETE, payload: id };
};

export function addTodo(todo) {
    return {
        type: ADD,
        payload: {
            id: Math.random(),
            content: todo
        }
    };
};