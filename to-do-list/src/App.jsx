import {useState} from "react";
import "./App.css";
import InputContainer from "./components/InputContainer";
import TodoContainer from "./components/TodoContainer";

function App() {
  const [inputVal, setInputVal] = useState('')
  const [todos, setTodos] = useState([])
  
  function writeTodo(e){
    setInputVal(e.target.value)//whatever we write is stored
  }

  function addTodo(){
    if(inputVal != ''){
      setTodos((prevTodos) => [...prevTodos , inputVal])//taking previous value in inputval
      setInputVal('')//setting it empty as task is added
    }
  }
  
  function delTodo(todoIndex){
    setTodos((prevTodos) => prevTodos.filter((prevTodos, prevTodosIndex) => {
      return prevTodosIndex != todoIndex
    })
  )
  }

  console.log(todos)
  return (
    <>
      <main>
        <h1>To Do List</h1>

        <InputContainer inputVal={inputVal} writeTodo={writeTodo} addTodo={addTodo}/>

        <TodoContainer todos={todos} delTodo={delTodo}/>

      </main>
    </>
  );
}

export default App;
