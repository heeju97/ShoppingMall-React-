/* eslint-disable */
import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import {Button, Navbar, Container, Nav, Col ,Row} from 'react-bootstrap';
import img0 from './con1.jpeg';
import img1 from './con2.jpeg';
import img2 from './con3.jpeg';
import data from './data.js';





function App() {

let [products] = useState(data);
let [Img] = useState([img0, img1, img2]);



  return (
    <div className="App">
    <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home" className='homeLogo'>HaniCHU</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" className='menuText'>Home</Nav.Link>
            <Nav.Link href="#features" className='menuText'>Item</Nav.Link>
            <Nav.Link href="#pricing" className='menuText'>Sale</Nav.Link>
            <Nav.Link href="#pricing" className='menuText'>More</Nav.Link>
            <Nav.Link href="#pricing" className='menuText'>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'></div>
      <br/>
     
  
    {
      products.map(function (a,i) {
        return(
         <Row>
          <Col>
            <Productlist product={a} Img={Img} index={i}/>
            
            {/* <Productlist products={products} />
            <Productlist products={products} /> */}
          </Col>
        </Row>
        )

      })
    }
    </div>
    

  );
}

// 반복되는 html(상품부분) component로 만들어 html 축약하기
const Productlist = (props) => {
  return(
    
    // <h4>{props.products}</h4>
    <div className='container-img'>
      <img src={props.Img[props.index]} ></img>

      <h4>{props.product.title}</h4>
      <p>{props.product.content}</p>
      <p>{props.product.price}</p>
    </div>
  )
}


export default App;
