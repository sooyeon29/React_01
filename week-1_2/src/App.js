// import React, {useState} from "react";

// function App () {
//   const style = {
//     padding: "100px",
//     display: "flex",
//     gap: "12px",
//   }
//   const squareStyle = {
//     width: "100px",
//     height: "100px",
//     border: "1px solid green",
//     borderRadius: "10px",
// 		display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   };

//   const vegetables = ["감자", "고구마", "오이", "가지", "옥수수"]

//   return (
//     <div style={style}>
//       {vegetables.map((vegetableName) => {
//         return (
//           <div style={squareStyle} key={vegetableName}>
//             {vegetableName}
//           </div>
//         )
//       })}
      
//     </div>
//   )

//   // return (
//   //   <div style={style}>
//   //     <div style={squareStyle}>감자</div>
//   //     <div style={squareStyle}>고구마</div>
//   //     <div style={squareStyle}>오이</div>
//   //     <div style={squareStyle}>가지</div>
//   //     <div style={squareStyle}>옥수수</div>
//   //   </div>
//   // )
// }

// export default App;
/*--------------------------------------------------------------*/
// import React from "react";

// function Square(props) {
//   const squareStyle = {
//     width: "100px",
//     height: "100px",
//     border: "1px solid green",
//     borderRadius: "10px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   }
//   return <div style={squareStyle}>{props.vegetableName}</div>
// }

// function App() {
//   const style = {
//     padding: "100px",
//     display: "flex",
//     gap: "12px"
//   }

//   const vegetables = ["감자", "고구마", "오이", "가지", "옥수수"]
//   return (
//     <div style={style}>
//       {vegetables.map((vegetableName) => {
//         return <Square key={vegetableName} vegetableName={vegetableName}/>
//       })}    
//     </div>    
//   )
// }

// export default App

/*--------------------------------------------------------------*/
import React from "react";

function User(props) {
  const squareStyle = {
    width: "100px",
    height: "100px",
    border: "1px solid green",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }
  return (
    <div style={squareStyle}>
    <div>{props.user.age}살 -</div>
    <div>{props.user.name}</div>
    </div>
  )
}
function App() {
  const style = {
    padding: "100px",
    display: "flex",
    gap: "12px"
  }

  const users = [
    { id: 1, age: 30, name: "송중기" },
    { id: 2, age: 24, name: "송강" },
    { id: 3, age: 21, name: "김유정" },
    { id: 4, age: 29, name: "구교환" },
  ];

  return ( 
    <div style={style}>
      {users.map((user) => {
        if (user.age <25) {
          return <User user={user} key={user.id}/>
        } else {
          return null
        }
      
        }        
      )
    }
    </div>
    )
  
}


export default App
/*---------------------------------------------------------------------------------*/

// import "./App.css"

// function App() {
//   return (
//     <div className="todos-container" id="todos">
//       안녕하세요
//     </div>
//   )
// }

// export default App