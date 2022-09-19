import {useContext} from 'react'

import TodoItem from './todoItem'
import { TodosContext } from '../store/todo-context'
import classes from './Todos.module.css'


const Todos:React.FC = () =>{        // <> --------> Generic Türler
    // FC : functional component.
    const todoCtx = useContext(TodosContext)
    return ( 
        <ul className={classes.todos}>
            {todoCtx.items.map((item)=>(
                <TodoItem key={item.id} text={item.text} onRemoveTodo={todoCtx.removeTodo.bind(null,item.id)}/>
            ))}
        </ul>      
    )
}

export default Todos