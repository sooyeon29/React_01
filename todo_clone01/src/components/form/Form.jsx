// TodoList 의 자식 TodoList로부터 값을 받음

import React, {useState} from "react"
import "./style.css"

// Form ---> input박스에서 값을 받음 & 추가하기저장하기를 눌르면 받을 폼을 만들어줌
let number = 3
function Form({setTodos, todos}) {
// ---> 요거는 setTodos랑 todos가 왜 반대로 적혀있는지 확인해봐야될듯...?

  const initialState = {    
    id: 0,
    title: "",
    body: "",
    isDone: false,
  }

  console.log(todos)
  // ---> 새로써준 제목을 콘솔에 찍어줌

  const [todo, setTodo] = useState(initialState)
  const onChangeHandler = (event) => {
    const {name, value} = event.target
    setTodo({ ...todo, [name]: value})
  }
  const onSubmitHandler = (event) => {
    event.preventDefault()
    if (todo.title.trim() === "" || todo.body.trim() === "") return
    setTodos([...todos, {...todo, id: number }])
    setTodo(initialState)
    number++
  }
return (
  <form onSubmit={onSubmitHandler} className="add-form">
    <div className="input-group">
      <label className="form-label">제목</label>
      <input
        type="text"
        name="title"
        value={todo.title}
        className="add-input input-body"
        onChange={onChangeHandler}
        />
        <label className="form-label">내용</label>
      <input
        type="text"
        name="body"
        value={todo.body}
        className="add-input"
        onChange={onChangeHandler}
        />      
    </div>
    <button type="submit" className="add-button">추가하기</button>
    {/* 여기서 type="submit"을 안써주어도 실행이 되는데 form안에 button을 줄때 submit혹은 함수를 만들어주어야되는거 아닌가용?? */}
  </form>
)
}
export default Form