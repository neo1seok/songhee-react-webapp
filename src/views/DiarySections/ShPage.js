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
import NewlineText,* as common from "../../js/common";
// reactstrap components
export default class ShPage extends Component {
  
  render() {

  return (
    <div className="page-header header-filter" id = {this.props.id} >

      <div className="squares square1">
        test
        </div> 
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
        <div className="content-center brand">
           <h3 className="d-none d-sm-block">
          
           <NewlineText text={this.props.text}/>
       
          </h3>
          <Button color="primary" type="button" onClick={() =>common.scrollTo(this.props.previd)} > 이전..</Button> 
          <Button color="primary" type="button" onClick={() =>common.scrollTo(this.props.nextuid)} > 다음..</Button> 

        </div>
        
      </Container>
      

     
    </div>
  );
  }
}

