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
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";

// sections for this page/view

import Basics from "views/IndexSections/Basics.js";
import Navbars from "views/IndexSections/Navbars.js";
import Tabs from "views/IndexSections/Tabs.js";
import Pagination from "views/IndexSections/Pagination.js";
import Notifications from "views/IndexSections/Notifications.js";
import Typography from "views/IndexSections/Typography.js";
import JavaScript from "views/IndexSections/JavaScript.js";
import NucleoIcons from "views/IndexSections/NucleoIcons.js";
import Signup from "views/IndexSections/Signup.js";
import Examples from "views/IndexSections/Examples.js";
import Download from "views/IndexSections/Download.js";
import StartPage from "views/DiarySections/StartPage.js";
import DiaryPage from "views/DiarySections/DiaryPage.js";
import ShPage from "views/DiarySections/ShPage.js";
import NewlineText,* as common from "../js/common";

//import diaries from '../json/diary.json';
import token from '../json/token.json';

import ReactDOM from "react-dom";
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


export class DiaryPageList extends Component {
  constructor(props) {
    super(props);
    var previd ="";
    this.state = {diaries: []};

    
  }
  
  componentDidMount() {
    fetch("/diaries",{
        method : "GET",
        headers : {
             Authorization : 'Bearer '+token.access_token
        }
      })
      .then(response => response.json())
      .then(response => {
        var result = common.makePrevNextUid(response);


    this.prev_map_info= result.prev_map_info;
    this.next_map_info= result.next_map_info;
    
    
    // this.next_map_info[previd] =  "";
    console.log("item.uid",this.prev_map_info);
    console.log("item.uid",this.next_map_info);
    const map_ref ={};
    this.dsfadsf = React.createRef();
    response.map(
      function(item){
        var rObj = {};
        map_ref[item.uid] = React.createRef()
        return null;
     }
     );
     this.map_ref = map_ref;

    console.log("map_ref",map_ref);

        this.setState( {diaries : response});
        console.log("########TEST###########",response);

      })


    
  }

render(){


  return (
  <>  
     {this.state.diaries.map(item => (   <DiaryPage ref = {this.map_ref[item.uid]} item={item} 
     id={item.uid} 
     previd={this.prev_map_info[item.uid]}
     nextid={this.next_map_info[item.uid]}
     map_ref={this.map_ref}

     
     />   ))}
   </>
    )
  }
}



const list = [
  {
    id: 'a',
    firstname: 'Robin',
    lastname: 'Wieruch',
    year: 1988,
  },
  {
    id: 'b',
    firstname: 'Dave',
    lastname: 'Davidds',
    year: 1990,
  },
];
 
// const ComplexList = () => (
//   <ul>
//     {list.map(item => (
//       <li key={item.id}>
//         <div>{item.id}</div>
//         <div>{item.firstname}</div>
//         <div>{item.lastname}</div>
//         <div>{item.year}</div>
//       </li>
//     ))}
//   </ul>
// );

const smaple_item = {
  "uid": "id_001",
  "title": "?????? ????????? ??? ????????? ??????????????? ?????????...",
  "text": "?????? ?????? ????????? ???????????????..?????????(?)?????? ?????? ??????.\n????????? ?????? ????????? ????????? ????????? ????????????.\n?????? ??? ????????? ????????? ????????????.\n?????? ?????? ?????? ?????????????????? ?????? ????????? ?????? ????????? ????????????.\n\n?????? ??????????????? ?????? ????????? ??????????????? ??????????????? ?????????????????? ???????\n????????? ????????? ????????? ?????? ????????????\n\n????????? ?????? ?????? ?????? ????????? ?????? ?????? ??????.\n???????????? ????????? ????????? ????????? ?????? ??? ?????? ?????? ???????????? \n?????? ?????? ????????? ?????? ????????? ?????????\n\n?????????  PC??? ??? ?????? ?????? LOL??? ????????? ??????.\n?????? ?????? ????????? ?????? ??????.\n\n????????? ???????????? ????????? \n????????? ???????????? ?????? ?????? ?????? ?????? ?????? ?????? ??????,\n????????? ?????? ?????????.\n????????????..??????(??????)???...????????? ?????????????????? ?????? \n?????? ?????? ?????? ?????? ????????? ?????????? ?????? ???????????????... ???\n\n??? ????????? ?????? ?????? ????????????\n????????? ?????? ????????? ????????????.\n?????? ?????? ?????? ??? ????????? ????????? ????????? ?????????  \n??????????????????\n?????? ?????? ??????.\n????????? ?????? ?????? ?????? ????????? ?????? ?????? ?????? ??????????????? ?????????\n????????? ??????.\n\n????????? ????????? ?????? ??????  ????????? LOL??? ???????????? ????????????.\n?????? ???????????? ????????? lol???????????? ????????? ??????????????? ?????????.\n\n??? ????????? ???????????? ????????? ?????? ?????????\n\n\n????????? ?????? ????????? ????????? ????????? ????????? ????????? ?????????..\n????????? ????????????.\n????????? ????????? ???????????????\n\n???????????? ??????????????? ????????? ??????????????? ??????..\n????????? ????????????.\n\n????????? ????????? ????????? ???????????????.\n??? ???????????? ????????? ????????? ?????????.\n\n\n\n????????? ?????? ?????? ???????????? ???????????? ???????????? ??????.\nLOL??? ????????? ????????? ????????? ?????? ??????.\n\n?????? ?????? ????????? ????????? ?????? ????????? ???????????? ?????????.\n?????? ?????????????\n\n???????????? ????????? ?????? ?????????.\n??? ?????? ??????????????? ????????? ?????????  ????????? ?????? ????????? ?????? ?????? ??? ?????? ??? ?????????.\n?????? ????????? ??????????????? ??????.\n\n????????? ?????? ??????????????? ????????? ????????????.\n????????? 3??? 23?????? ?????? ?????? ??? ?????? ???..\n?????? ????????? ????????? ?????? ????????????.\n\n?????? ??? ???????????? ?????? ????????????  ????????? ?????? LOL??????.\n",
  "summary": "....\n????????? ????????????.\n\n????????? ????????? ????????? ???????????????.\n??? ???????????? ????????? ????????? ?????????.....",
  "date": "2020-02-16",
  "date_title": "2020??? 02??? 16??? ?????????"
}

export default function Diary() {

  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  },[]);

  
  

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">

        <DiaryPageList/>
        <Footer />
      </div>
    </>
  );
}
