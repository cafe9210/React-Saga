// import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { login } from './modules/login';
// 함수형 App 컴포넌트
const App = () => {
  const message = useSelector(state => state.message);

  const dispatch = useDispatch();

  // export const login = () =>  axios.post('/').then(response=>{
  //   console.log(response.data.status);
  // });

  // 이벤트 핸들러 함수
  // const onClick = () => {
  //   axios.post('/')
  //   .then(response=>{
  //     console.log(response.data.status);
  //     dispatch(loginsuccess({status: response.data.status}));
  //   });
  // }
  const onClick = () => {
      dispatch(login());
  }

  // view 렌더링
  return (
    <div>
       <button
         onClick={onClick}
       >로그인</button>
       <h1>{message}</h1>
     </div>
   );
 }
 export default App;


// import 로고 from "./logo.svg";
// import "./App.css";
// import React, {Button} from "react";
// import { Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { axios_login, saga_login } from "./index";
// import axios from "axios";

// function App() {
//   const dispatch = useDispatch();
//   const Store = useSelector((store) => store);

//   const axios_request = async () => {
//     try {
//       const result = await axios.post("/api/check/check", { flagRef });
//       dispatch(axios_login(result.data.toString()));
//       console.log(result);
//     } catch (e) {
//       dispatch(axios_login(e));
//     }
//   };

//   const redux_saga = () => {
//     dispatch(saga_login());
//   };

//   const flagRef = useRef(null);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={로고} className="App-logo" alt="logo" />
//         <br />
//         <input type="text" ref={flagRef}></input>
//         <p>
//           {Store.axios_result ? Store.axios_result.toString() : "요청 보내기"}
//         </p>
//         <Button onClick={axios_request}>
//           그냥 악시오스 요청
//         </Button>
//         <p>{Store.saga_result && Store.saga_result.toString()}</p>
//         <Button onClick={redux_saga}>
//           리덕스 사가로 요청
//         </Button>
//       </header>
//     </div>
//   );
// }

// export default App;