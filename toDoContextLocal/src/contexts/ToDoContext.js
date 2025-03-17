import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    todos: [
        {
            id:1,
            todo: "msg",
            completed: false,
        }
    ],
    addToDo: (todo) => {},
    updatedToDo: (id,todo) => {},
    deleteToDo: (id) => {},
    toggleComplete: (id) => {}
})


export const useToDo = () => {
    return useContext(ToDoContext)
}


export const ToDoprovider = ToDoContext.Provider