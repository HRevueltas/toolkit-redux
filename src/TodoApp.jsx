import { useState } from "react"
import { useGetTodosByIdQuery, useGetTodosQuery } from "./store/apis/todosApi"

export const TodoApp = () => {


  // const { data,
  //   status,
  //   isLoading,
  //   isSuccess,
  //   isError,
  //   error } = useGetTodosQuery

  // const { isError, isFetching, isLoading, isSuccess, data: todos = [] } = useGetTodosQuery();
  const [todoId, setTodoId] = useState(1)
  const { data: todo, isLoading } = useGetTodosByIdQuery(todoId)

  const prevTodo = () => {
    if(todoId ===1) return
    setTodoId(todoId - 1)
  }
  const nextTodo = () => {
    setTodoId(todoId + 1)
  }
  return (
    <>
      <h1>TodoApp - RTK Query</h1>
      <hr />

      <h4>isLoading...{isLoading ? 'True' : 'false'}</h4>
      <pre>{JSON.stringify(todo)}</pre>

      <button style={{ marginRight: '20px' }} onClick={prevTodo} disabled={isLoading} >Prev Todo</button>
      <button onClick={nextTodo}  disabled={isLoading}  >Next Todo</button>

      {/* <ul>

        {todos.map((todo) => (

          <li key={todo.id}>
            <strong >{todo.completed ? 'DONE ' : 'PENDING '}</strong>
            {todo.title}
          </li>
        ))}
      </ul> */}


    </>
  )
}
