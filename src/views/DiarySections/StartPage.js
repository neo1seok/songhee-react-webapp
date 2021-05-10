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
import { event } from "jquery";

import React, { Component } from "react";

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
import ReactDOM from "react-dom";
import * as common from "../../js/common";
// reactstrap components

class BasePage extends Component {
  render() {

    return (
      <div className="page-header header-filter "
      id = {this.props.uid} 
      >

        {this.props.contents}
  
        
        
  
       
      </div>
    );
    }

}
 class StartPage extends Component {
  constructor(props) {
    super(props);
    this.test = "test"  ;
    console.log("this.nextid",this.props.nextid);
    
  }
  state = {
    height: 0
  };
  input = null;
  box = null;

  handleClick = () => {
    console.log("StartPage",this.props.nextid);
    this.input.focus();
  };

  componentDidMount() {
  
  }
  
  

  render() {

    return (
      
      <div className="page-header header-filter"       id = {this.props.id} 
      >
  
        <div className="squares square1" />
        <div className="squares square2" />
        <div className="squares square3" />
        <div className="squares square4" />
        <div className="squares square5" />
        <div className="squares square6" />
        <div className="squares square7" />
        <Container>
          <div className="content-center brand">
            <h1 className="h1-seo">호갱일기!!</h1>
        
            <Button color="primary" type="button" onClick={() =>common.scrollTo(this.props.nextid)} > 다음 으로..</Button> 
  
          </div>
          
        </Container>
        
  
       
      </div>
    );
    }
}

export default StartPage;