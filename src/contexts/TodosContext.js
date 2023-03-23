import { createContext, useContext, useState } from "react";

export const TodosContext = createContext();

export const TodosProvider = ({children}) =>{
    const [todos, setTodos] = useState([])
    const values = {
        todos,
        setTodos
    }
    return (
    <TodosContext.Provider value={values}>{children}
    </TodosContext.Provider>
    );
}


export const useTodos = () => useContext(TodosContext)