// //  가장 마지막! 해당 결과를 보여준다
// function App() {
//     return <TodoList />
//   }
  
  // App에가 값을 주는 컴포넌트(가장부모)


  import React, {useState} from "react"
  import Form from "../components/form/Form"
  import Header from "../components/header/Header"
  import Layout from "../components/layout/Layout"
  import List from "../components/list/List"

// 현화면에 보여지는 카드들의 모습! ---> useState의 초기값으로 보여주고있다
  function TodoList() {
    // const TodoList () => { ---> 위아래 두개의 모양으로 함수를 쓸수있다
    const [todos, setTodos] =useState([
      {
        id: 1,
        title: '리액트 공부하기',
        body: '리액트 기초를 공부해봅시다.',
        isDone: false
      },
      {
        id: 2,
        title: '리액트 공부하기',
        body: '리액트 기초를 공부해봅시다',
        isDone: true
      }
    ])
  
    return (
      <Layout>              
        <Header/>
        <Form setTodos={setTodos} todos={todos} />
        <List todos={todos} setTodos={setTodos} />
        {/* // TodoList가 받고 있는 것들은 ---> Header&Form&List 세가지이다 */}
      </Layout>
    )
  }
  export default TodoList