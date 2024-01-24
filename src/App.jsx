import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement,  incrementBy } from './store/slices/counter/counterSlice'
function App() {
  const { counter } = useSelector(state => state.counter)
  const dispatch = useDispatch()

  let number = 12
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          count is {counter}
        </p>
        <button onClick={() => dispatch(increment())}>
          increment
        </button>
        <button onClick={() => dispatch(decrement())}>
          decrement
        </button>
        <button  onClick={() => dispatch(incrementBy(number))}>
          increment By {number}
        </button>
      </div>
    </>
  )
}

export default App
