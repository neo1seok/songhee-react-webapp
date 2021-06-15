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

import diaries from '../json/diary.json';
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
  UncontrolledCarousel,
  Row,
  Col,
  Table
} from "reactstrap";


const Example = (props) => {
  return (
    <Table >
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}



const carouselItems = [
  {
    src:
      "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1692f925835%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1692f925835%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.45%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    altText: "Slide 1",
    caption: ""
  },
  {
    src:
      "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1692f925837%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1692f925837%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.45%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    altText: "Slide 2",
    caption: ""
  },
  {
    src:
      "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1692f925838%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1692f925838%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.45%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    altText: "Slide 3",
    caption: ""
  }
];

class Carousel extends React.Component {
  render() {
    return (
      <>
        <UncontrolledCarousel items={carouselItems} />
      </>
    );
  }
}


export class DiaryTableList extends Component {
  constructor(props) {
    super(props);
    var previd ="";
    var result = common.makePrevNextUid(diaries);


    this.prev_map_info= result.prev_map_info;
    this.next_map_info= result.next_map_info;
    
    
    // this.next_map_info[previd] =  "";
    console.log("item.uid",this.prev_map_info);
    console.log("item.uid",this.next_map_info);
    this.state = {diaries: []};
    
    this.subdiaries = diaries.slice(0, 10)

    
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
  this.setState( {diaries : response});
   console.log("########TEST###########",response);
})


    document.body.classList.toggle("index-page");
  }
render(){


  return (
    <Table >
    <thead>
        <tr>
            
            <th>date</th>
            <th>title</th>
            <th className="text-center">자세히</th>
        </tr>
    </thead>
    <tbody>
    {this.state.diaries.map(item => (   
   
    <tr>
            
            <td>{item.date_title}</td>
            <td className= "text-left">{item.title}</td>
            
            <td className="text-right">
                <Button className="btn-icon" color="success" size="sm">
                    <i className="fa fa-edit"></i>
                </Button>{` `}
            
            </td>
        </tr>
     
     )  )}

      
    </tbody>
</Table>
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
  "title": "오늘 오전에 쓴 일기로 스킵할려고 했는데...",
  "text": "오늘 머리 자르러 갔었는데…..이상한(?)일이 일어 났다.\n매니저 중에 예쁘고 귀여운 여자가 있는데….\n오늘 내 머리를 자르러 들어왔다.\n사실 전에 한번 들어왔었는데 그때 얘기를 많이 한것도 아니었다.\n\n오늘 들어왔길레 약간 기분이 이상했던게 까발려지는 느낌이라고나 할까?\n아무튼 그렇게 자르기 시작 하면서…\n\n그녀가 정말 뜬금 없는 대화를 시작 하는 거다.\n이태원에 팔찌로 찍으면 맥주를 먹을 수 있는 곳을 얘기하며 \n계속 해서 대화를 이어 나가는 거다…\n\n자신이  PC방 을 자주 가며 LOL을 한다는 거다.\n이런 저런 얘기를 계속 했다.\n\n그러다 세척하러 갔다가 \n갑자기 들어와서 뭔가 얘기 하길 주저 하며 머뭇 다가,\n어렵게 말을 꺼냈다.\n“혹시…..하아(한숨)…...위에서 물어봐달라고 해서 \n제품 추가 구매 하실 생각은 없나요? 요즘 할인이라…... “\n\n난 최대한 무안 하지 않도록…\n“본인 의지 아닌거 알아요….\n올해 말에 구매 할 생각이 있다고 얘기해 주라고  \n얘기해요…”\n라고 얘기 했다.\n아마도 재미 있게 얘기 했는데 이런 얘기 해서 미안하다는 표정과\n뉘양스 였다.\n\n세척이 끝나고 다시 와서  나보고 LOL는 안하냐며 물어봤다.\n자기 단톡방이 있는데 lol할사람이 없어서 물어본다고 말이다.\n\n난 한번도 해본적이 없다고 얘기 했고…\n\n\n그리고 혹시 게임할 생각이 있으면 얘기해 달라고 하길래..\n이름을 물어봤다.\n성함이 어떻게 되시냐고…\n\n그랬더니 카운터에서 명함을 드리겠다고 해서..\n명함을 받아왔다.\n\n유송희 이라는 이름의 아가씨였다.\n그 명함에는 휴대폰 번호는 없었다.\n\n\n\n문제는 내가 지금 오랜만에 설레임을 느낀다는 거다.\nLOL을 배워야 겠다는 생각도 하고 있다.\n\n사실 어떤 의미로 나한테 그런 대화를 걸었는지 모른다.\n뭐가 중요한가?\n\n예전에도 비슷한 일이 있었다.\n집 근처 편의점에서 일하던 직원이  나에게 공짜 음식을 주던 행동 을 하던 때 말이다.\n그녀 이름은 오기쁨양이 었다.\n\n그때도 약간 설레였는데 지금도 설레인다.\n다음달 3월 23일에 다시 보게 될 텐데 …..\n어떤 마음의 준비를 할지 모르겠다.\n\n우선 이 아가씨랑 좀더 가까워질  연결의 키는 LOL이다.\n",
  "summary": "....\n명함을 받아왔다.\n\n유송희 이라는 이름의 아가씨였다.\n그 명함에는 휴대폰 번호는 없었다.....",
  "date": "2020-02-16",
  "date_title": "2020년 02월 16일 일요일"
}

export default class DiaryTable extends Component  {

  
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
      <div className="page-header header-filter " >
        <div className="content-center brand">
          {/* <Carousel/> */}
    <DiaryTableList/>
    


        </div>

       
    
    
      </div>


        <Footer />
     
    </>
  );
}
}
