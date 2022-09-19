import {useRef,useContext} from 'react'
import { TodosContext } from '../store/todo-context'
import classes from './NewTodo.module.css'

const NewTodo:React.FC = () => {
    const TodosCtx = useContext(TodosContext)
    const todoTextInputRef = useRef<HTMLInputElement>(null)

    const submitHandler = (e:React.FormEvent) => {
        e.preventDefault()
        const enteredText = todoTextInputRef.current!.value
        if(enteredText.trim().length === 0){
            //hata fırlat
            return
        }
        TodosCtx.addTodo(enteredText)
    }
  return (
    <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor="text">Todo Text</label>
        <input type="text" id="text" ref={todoTextInputRef} />
        <button>Todo Ekle</button>
    </form>
  )
}

export default NewTodo
