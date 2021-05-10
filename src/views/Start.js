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
import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";

// sections for this page/view

import StartPage from "views/DiarySections/StartPage.js";
import ShPage from "views/DiarySections/ShPage.js";

import diaries from '../json/diary.json';


export default function Start() {

  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  },[]);

  const scrollTo = (event)=>{
    diaries.forEach(tmp => {
      console.log("tmp",tmp.title);
      
    })

  };
  const sample_test = `
  이 홈페이지는 유송희 당신 만을 위한 페이지 입니다. <br/>
  이 글을 보고 있다면 아마도 당신과 만날 수 없는 상태일 겁니다.
  혹은 너무나 가까워 지거나 일건데 후자는 가능성이 업다고 봅니다.`

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
      
        <StartPage id="start" nextid="sh"/>
        <ShPage id="sh" previd= "start" nextid="sh" text={sample_test}/>
        
 

        <Footer />
      </div>
    </>
  );
}
