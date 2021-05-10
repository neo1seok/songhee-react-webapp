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
import React,{Component,useRef,useState } from "react";
import ReactDOM from "react-dom";

import NewlineText,* as common from "../../js/common";


import data from '../../json/diary.json';

import {
  Button,
  Label,
  FormGroup,
  CustomInput,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
  Container,
  Row,
  Col,
} from "reactstrap";

// reactstrap components
const list_sample = [1,2,3,4,5]


export default  class DiaryPage extends Component {
    constructor(props) {
      super(props);
      
      
      this.state = {text: this.props.item.summary};
      this.state.size_info = `window.screen.availWidth:${window.screen.availWidth}
      window.screen.availHeight:${window.screen.availHeight}  `;
      
      console.log("this.size_info",this.size_info);
      
    }
    

    state = {
      text: "",
      demoModal:false,
      size_info:"test",
    };
    input = null;
    box = null;

    handleClick = () => {
      var domenode = ReactDOM.findDOMNode(this)
      let offsetTop = this.myRef.current.offsetTop;

      console.log("StartPage this.myRef.current.offsetTop;",offsetTop);
      
    };

    setDemoModal = (modal) => {
      

      this.setState({ demoModal:modal})
      
    };
    demoModalDownAndScroll = () => {
      
      this.setDemoModal(false);
      common.scrollTo(this.props.nextid)
    };

    extend = () => {
      
      console.log("StartPage this.myRef.current.offsetTop;",
      
      );

      this.setState( {text : this.props.item.text});
      
      
    };

    componentDidMount() {
      
    
    }
    DiaryModal =()=>(

      <Modal isOpen={this.state.demoModal} toggle={() => this.setDemoModal(false)}>
      <div className="modal-header justify-content-center">
      
        
        <h4 className="title title-up"> {this.props.item.title}</h4>
  
        
      </div>
      <div className="modal-header justify-content-center">
      
        
        <h6 className="title title-up"> {this.props.item.date_title}</h6>

      
      </div>
      <div></div>
      <div className="modal-body">
      {/* {this.state.size_info} */}
      

      <NewlineText text={this.props.item.text}/>
       
      </div>
      <div className="modal-footer">
        <Button color="default" type="button">
          Nice Button
        </Button>
        <Button
          color="danger"
          type="button"
          onClick={() => this.setDemoModal(false)}
        >
          Close
        </Button>

        <Button color="primary" type="button" onClick={this.demoModalDownAndScroll}  > 
          다음
          </Button> 
      </div>
    </Modal>
    )

    render() {
      

    return (
      <div className="page-header header-filter " id={this.props.id} >

       
        <Container>
          <div className="content-center brand">
          <h4 className="h4-seo">
          {this.props.item.date_title}
            </h4>
            <h2 className="h2-seo">
            {this.props.item.title}

            </h2>
          <div className="">
          <h6 className="h2-seo">
            
            <NewlineText text={this.state.text}/>
            </h6> 
          </div>
          

          <Button color="primary" type="button" onClick={() =>common.scrollTo(this.props.previd)}  > 
          이전
          </Button>           
          <Button color="primary" onClick={() => this.setDemoModal(true)}>
              자세히
            </Button>
            {/* <Button color="primary" onClick={this.extend}>
              자세히2
            </Button> */}
          <Button color="primary" type="button" onClick={() =>common.scrollTo(this.props.nextid)}  > 
          다음
          </Button> 
          </div>
          
        </Container>

        {this.DiaryModal()}

        
    );
        

      
      </div>

      
    );
    }
}