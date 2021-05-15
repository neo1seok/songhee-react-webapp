/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";

// sections for this page/view

import StartPage from "views/DiarySections/StartPage.js";
import ShPage from "views/DiarySections/ShPage.js";


import letters from '../json/letter.json';
import NewlineText,* as common from "../js/common";
import {
  Button,
  Label,
  FormGroup,
  CustomInput,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";


const scrollTo = (event)=>{
   

};
const sample_test = `
이 홈페이지는 유송희 당신 만을 위한 페이지 입니다.
이 글을 보고 있다면 여러가지 이유로 아마도 우리가 만날수 없는 상태일 겁니다.
조금 시간이 걸리더라도 나의 이 웹페이지에 있는 내용을 다 봐주면 감사하겠어요..
왜냐하면 이 앱은 정확히 송희씨 만을 위해 만든 것이니 까요…
그 누구도 아닌…..`


export class StartPageList extends Component {
  constructor(props) {
    super(props);
    var previd ="";
    var result = common.makePrevNextUid(letters);
    var first_id = letters[0].uid;
    var last_id = letters[letters.length-1].uid;
    console.log("first_id",first_id,letters.length);
    console.log("last_id",last_id);

    this.prev_map_info= result.prev_map_info;
    this.next_map_info= result.next_map_info;
    this.prev_map_info[first_id] =props.st_id;
    this.next_map_info[last_id] = props.ed_id;

    
    // this.next_map_info[previd] =  "";
    console.log("item.uid",this.prev_map_info);
    console.log("item.uid",this.next_map_info);

    
  }
  
render(){


  return (
  <>  
     {letters.map(item => (   <ShPage item={item} id={item.uid} 
     previd={this.prev_map_info[item.uid]}
     nextid={this.next_map_info[item.uid]}

     text={item.text}
     
     />   ))}
   </>
    )
  }
}


class GotoDiary extends Component {
  
  render() {

  return (
    <div className="page-header header-filter" id = {this.props.id} >

     
      <Container>
        <div className="content-center brand">
           <h3 className="d-none d-sm-block">
          
           호갱의 일기로 가볼까요?
       
          </h3>
         
          <Button color="primary" type="button" href="/diary" > 일기로 가기</Button> 

        </div>
        
      </Container>
      

     
    </div>
  );
  }
}

export default class Start extends Component {
  

  componentDidMount() {
    document.body.classList.toggle("index-page");
  }
  componentDidUpdate() {
    document.body.classList.toggle("index-page");
  }

render(){

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
      
        <StartPage id="start" nextid="id_m_000"/>
        {/* <ShPage id="sh" previd= "start" nextid="sh" text={sample_test}/> */}
        <StartPageList st_id='start' ed_id='goto_diary' />

     
        <GotoDiary id ='goto_diary'/>
 

        <Footer />
      </div>
    </>
  );
}

 
}
