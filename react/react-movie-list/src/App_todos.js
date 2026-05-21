import Button from "./Button";
import { useState } from 'react';

function App() {
  const [toDo, setToDo] = useState("");
  const [toDoArray, setToDoArray] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    
    // 입력하는 Todo 값이 비었다 면
    if(toDo === "") {    
      return;
    }
    
    setToDoArray( (currentArray) => [toDo, ...currentArray])
    // 입력값 초기화
    setToDo("");
    
  }
  console.log(toDoArray)
  return (
    <div>
      <h1>ToDo List : ({toDoArray.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="할 일 입력" />
        <button type="submit">ADD ToDo</button>
      </form>
      <hr />
      <ul>
        {toDoArray.map( (item, idx) => (
          <li key={idx}>{item}</li>
        ))}        
      </ul>
    </div>
  );
}

export default App;
