import React from 'react'
import {useState} from 'react'
import Todo from "../models/todo"

type TodosContextObj = {
        items:Todo[]
        addTodo: (text:string) => void
        removeTodo: (id:string) => void
}

export const TodosContext = React.createContext<TodosContextObj>({
    items:[],
    addTodo:()=>{},
    removeTodo: (id:string) => {},
})

const TodosContextProvider:React.FC<{
    children?:React.ReactNode
        // children'da kullandığımız ? isteğe bağlı olduğunu ifade eder.Örneğin items: da soru işareti koymadık ve kullanmadığımız için App.tsx'de uyarı veriyor.
}> = (props) => {
    const [todos,setTodos] = useState<Todo[]>([])
    const addTodoHandler = (todoText:string) => {
        const NewTodo = new Todo(todoText)
        setTodos((preTodos)=>{
        return preTodos.concat(NewTodo)
        })
  }
     const removeTodoHandler = (todoId:string) => {
        setTodos((preTodos)=>{
            return preTodos.filter((todo)=>todo.id !== todoId)
        })
 }
    const contextValue:TodosContextObj = {
        items:todos,
        addTodo : addTodoHandler,
        removeTodo:removeTodoHandler,
    }
    return (
    <TodosContext.Provider value={contextValue}>
        {props.children}
    </TodosContext.Provider>
    )
}

export default TodosContextProvider