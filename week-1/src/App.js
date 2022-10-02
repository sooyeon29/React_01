
// // import [패키지명] from [경로] 이 형식으로 불러와요.
// import React from 'react'; 
// // js 파일 뿐 아니라 이미지도 가능가능!
// import logo from './logo.svg';
// // css? 가능!
// import './App.css';

// function App() {

//   // //간단한 javascript넣기 예시!
//   // const cat_name = 'perl';
//   //     return (
//   //       <div>
//   //         hello {cat_name}!
//   //       </div>
//   //     );

//   // return (
   
//   //   <div className="App">
//   //     {/* <header className="App-header">
//   //       <img src={logo} className="App-logo" alt="logo" />
//   //       <p>
//   //         Edit <code>src/App.js</code> and save to reload.
//   //       </p>
//   //       <a
//   //         className="App-link"
//   //         href="https://reactjs.org"
//   //         target="_blank"
//   //         rel="noopener noreferrer"
//   //       >
//   //         Learn React
//   //       </a>
//   //     </header> */}
//   //     <p>안녕하세요! 리액트 반입니다. :)</p>
//   //     <input type='text'/>
//   //   </div>
//   // );
// }

// export default App;


/*---------------------------------------------------------------*/

// import React from 'react';
// function App() {

//   const handleClick = () => {
//     alert('클릭!')
//   }
  
// 	// <---- 자바스크립트 영역 ---->

//   return (
//   /* <---- HTML/JSX 영역  ---->*/
//     <div
//       style={{
//         height: '100vh',
//         display: ' flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}
//     >
   
//    이것은 내가 만든 App컴포넌트 입니다
//    <button onClick={handleClick}>클릭!</button>
//     </div>
//   );
// }

// export default App;

// /*---------------------------------------------------------------*/

// // import React from 'react'
// // function App() {
// //   //자바스크립트 영역!
// //   const handleClick = () => {
// //       alert('클릭!')
// //   }

// //   return (
// //   //JSX영역!!
// //       <div>
// //       <button onClick={handleClick}>클릭!</button>
// //       </div>
// //       )
// //   }
// // export default App


// /*----------------------------------------------------------------------*/
// import React from "react"

// function Child() {
//   return <div>나는 자식입니다.</div>
// }

// function App() {
//   return <Child/>
// }

// export default App

/*-------------------------------------------------------------------*/

// import React from 'react'
// import logo from './logo.svg'
// import './App.css'

// function App() {
// 	const number = 1
    
//     return (
//     	<div className="App">
//         	<p>안녕하세요! 리액트 반입니다 :)</p>
//             <p>{number > 10? number+'은 10보다 크다' : number+'은 10보다 작다'}</p>
//         </div>
//     )
// }

// export default App

/*---------------------------------------------------------------*/
// import React from 'react'

// function App() {
//   const styles = {
//     color: 'Orange',
//     fontSize: '50px'
//   }
//   return (  
//     <div>
//       <p style={styles}>orange</p>
//     </div>
//     // <div>
//     //   <p style={{color: 'orange', fontSize: '100px'}}>orange</p>
//     // </div>
//   )

// }

// export default App

/*----------------------------------------------------------------------*/

// import React from 'react'

// function App() {
//   return <Grandfather/>
// }

// function Grandfather() {
//   return <Mother/>
// }

// function Mother() {
//   const name = '홍부인'
//   return <Child motherName={name}/>  //---> props로 name을 전달! 마더의 정보를 차일드에게 전달!
// }

// function Child(props) {
//   // console.log(props) //---> 이게 바로 props~!!
//   return (
//     // <div style={{color: 'skyblue', fontSize: '80px'}}>
//     //   <p>부모 자식 컴포넌트에서 props로 정보 전달하기</p>
//     // </div>
//     <div>
//       <p>마더에서 어떤 값을 받았을까?</p>
//       {props.motherName}
//       </div>
//   )
// }


// export default App

/*--------------------------------------------------------------------*/
// import React from 'react'

// function App() {
//   return <Grandfather/>
// }

// function Grandfather() {
//   const name = '할아버지'
//   return <Mother grandfatherName = {name}/>
// }

// function Mother(props) {
//   return <Child grandfatherName={props.grandfatherName}/>
// }

// function Child(props) {
//   return (
//     <div>
//       <p>props 전달하기 성공!!</p>
//       {props.grandfatherName}
//     </div>
//   )
// }

// export default App

/*------------------------------------------------------------------*/
// import React from 'react'

// function User(props) {
//   return <div>{props.children}</div>
// }

// function App() {
//   return <User>안녕하세요</User>
// }

// export default App
/*------------------------------------------------------------------*/

// import React from 'react'

// function Child({name}) {
//   return <div>내 이름은 {name}입니다.</div>
// }

// // Child컴포넌트에서 직접 부모컴포넌트로 부터 props를 받기전에 임시로 사용하는 props설정!
// // 이후 부모 컴포넌트에서 name props가 오게되면 설정된 defaultProps는사라지고 내려받은 props로 값이 바뀌게 된다.
// Child.defaultProps={
//   name: '김아무개'
// }

// export default Child

/*-----------------------------------*/

// import React from 'react'

// function Child({ name = '이아무개'}) {
//   return <div>내 이름은 {name}입니다.</div>
// }

// export default Child

/*-------------------------------------------------------------------*/

// import React, { useState } from 'react'

// function Grandfather() {
//   const [name, setName] = useState("김할아")
//   return <Mother grandFatherName = {name} setName={setName}/>
// }

// function Mother(props) {
//   return <div>
//     <button onClick={() => {
//       props.setName('박할아')
//     }}
//     >
//       할아버지 이름 바꾸기
//     </button>
//     <div>
//       {props.grandFatherName}
//     </div>
//   </div>
// }

// function App() {
//   return <Grandfather/>
// }

// export default App

/*-------------------------------------------------------------------*/

// import React, {useState} from 'react'

// function App() {
//   const [name, setName] = useState('길동이')

//   function onClickHandler() {
//     setName("누렁이")
//   }
//   return (
//     <div>
//       {name}
//       <button onClick={onClickHandler}>강아지 이름 버튼</button>
//     </div>
//   )
// }

// export default App
/*-------------------------------------------------------------------*/

import React, { useState } from "react";

const App = () => {
  const [value, setValue] = useState("")

  const onChangeHandler = (event) => {
    const inputValue = event.target.value
    setValue(inputValue)
  }

  console.log(value)

  return (
    <div>
      <input type='text' onChange={onChangeHandler} value={value}/>
    </div>
  )
}

export default App

/*-----------------------------------------------------------------*/

// import React, {useState} from "react";

// function App() {
//   const [dogs, setDogs] = useState(['말티즈'])

//   function onClickHandler() {
//     setDogs([...dogs, "시고르자브르종"])
//   }
//     console.log(dogs)

//     return (
//       <div>
//         <button onClick={onClickHandler}> 버튼</button>
//       </div>
//     )  
// }

// export default App


/*--------------------Counter 만들기 실습!!---------------------------*/
import React, {useState} from "react";

function App () {
  const [num, setNum] = useState(0)

  return (
    <div
    style={{
              height: '100vh',
              display: ' flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
      {num}
      <br/>
      <button onClick={ () => setNum(num+1)}>+ 1</button>
      <button onClick={ () => setNum(num-1)}>- 1</button>
    </div>

  )
}

export default App