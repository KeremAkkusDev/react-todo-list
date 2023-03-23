import React, { useState } from 'react'
import { useTodos } from '../contexts/TodosContext';

function Form() {
    const {todos,setTodos} = useTodos();
    const [todo,setTodo] = useState();

    const handleSubmit = (e) =>{
      todo && setTodos((prevState)=> [...prevState, {text:todo, isCompleted:false}])
      setTodo("")
      e.preventDefault();
    }

    const clearAllFinished = () => {
      setTodos(todos.filter((todo) => todo.isCompleted === false));
    };

  return (
    <div className='TodoForm'>
      <form onSubmit={handleSubmit}>
        <div className='ui input'>
          <input  type="text" placeholder="Add Todo" value={todo} onChange={(e)=>{setTodo(e.target.value)}}/>
          <button className='ui button' type='submit'>Add Todo</button>
        </div>

        <div>
        <br/>
          <button className='ui button primary' onClick={clearAllFinished}>Clear Completed</button>
          <button className='ui button primary' onDoubleClick={()=>{setTodos([])}}>Clear All</button> 
        </div>
        <br/>
      </form>
    </div>
  )
}

export default Form