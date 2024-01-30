/*eslint-disable */
// ⬆️warning messages 없애는 방법

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import * as React from 'react' 




function App() {
 
  // let post = '강남 우동 맛집'; 
  // let [글제목, b] = useState('맛집 추천');
  let [logo, setLogo] = useState('React BLOG');

  let [글제목, title] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학']);
  let [좋아요,plus] = useState([0,0,0]);
  // let [좋아요,plus] = useState(0);
  // let [좋아요,plus] = useState(0);
  let [modal, setModal] = useState(false);
  let [modalTitle, setMT] = useState(0);
  let [입력값,입력값변경]= useState('');

  // function plus (){
  //   console.log(1);
  // }
 
 
  return (
    <div className="App">
      <div className="black-nav">
       <h4>{logo}</h4>
      </div>

    
      <button onClick={()=>{
        let sortt = [...글제목];
        sortt.sort();
        title(sortt)
      }}>🔤</button>
      
      <button onClick={()=>{
        // 원본 데이터를 수정하는 방식⬇️
        // 글제목[0] ='여자 코트 추천';
        // title(글제목);

        //원본 데이터 수정x ,카피본 만들기 (array object 다룰 때는 원본을 보존하는 것이 좋음)
        let copy = [...글제목];
        copy[0]='여자 코트 추천';
        title(copy);

      //[... ]=> shallow copy or deep copy => 메모리 주소가 변경됨
      //같은 arr를 복사해 만들면, 같은 state로 인식되어 작동하지 않음=> shallow copy를 사용해 새로운 메모리 주소를 받아 다른 arr로 인식 가능

      }}>👚</button>

      {/* <div className="list"> 
        <h4>{ 글제목[0] } <span onClick={()=>{ plus(좋아요++)}}>👍</span> {좋아요} </h4>
        <p>1월 24일</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>1월 24일</p>
      </div>
      <div className="list">
        <h4 onClick={()=> {setModal(!modal)}}>{ 글제목[2] }</h4>
        <p>1월 24일</p>
      </div> */}

      {
        글제목.map(function(a,i){
          return (<div className="list">
          <h4 onClick={()=> {setModal(!modal); setMT(i)}}>{ a }<span onClick={(e)=>{
            e.stopPropagation();
            let copyy = [...좋아요];
            copyy[i] = copyy[i]+1;
            plus(copyy)
          }}>👍</span> {좋아요[i]} </h4>
          <p>1월 24일</p>
          <button className='postbtn' onClick={()=>{
            let copy = [...글제목];
            copy.splice(i,1);
            title(copy);
          }}>❌</button>
        </div>)
        })
      }


      <input onChange={(e)=>{입력값변경(e.target.value);
      console.log(입력값)}}></input>
      <button onClick={()=>{
        //내 코드
        // input값을 추출
          // console.log(입력값)
        // 추출된 input 값을 글제목 array에 요소로 담기 =unshift 사용? 
        // 글제목.unshift(입력값)
      //강의코드
      let copy = [...글제목];

      copy.unshift(입력값);
      title(copy);

      }}>➕포스팅</button>


      {/* <Modal></Modal> */}
      

        {
          // html 중간에서 js(if, for) 등을 사용할 수 없음 => 삼항연산자(ternary operator) 사용
          // 조건식 ? 참일 경우 실행할 코드 : 거짓을 경우 실행할 코드
          modal == true ? <Modal 글제목={글제목} modalTitle={modalTitle}/> : ''
          
        }
        <Modal1234></Modal1234>
  
    </div>
  );
}


function Modal(props){
  
  return(
    <div className="modal">
        <h4>{
          props.글제목[props.modalTitle]
        }</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={()=>{
          // let coppy = [...props.글제목];
          // coppy[0] = '여자 코트 추천';
          // props.title(coppy);
        }}>수정</button>
    </div>
  )

}

class Modal1234 extends React.Component {
  constructor(){
    super();
    this.state = {
      name : 'han',
      age : 20
    }
  }
  render(){
    return(
      <div>안녕{this.state.age}
      <button onClick={()=>{
        this.setState({name: 'kim'})
      }}>💥</button>
      </div>
    )
  }
}

export default App;
