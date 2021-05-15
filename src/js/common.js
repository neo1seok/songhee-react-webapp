
export function setIgnoredYellowBox() {
  console.ignoredYellowBox = [
      'Remote debugger is in a background tab which may cause apps to perform slowly. Fix this by foregrounding the tab (or opening it in a separate window).',
  ];
}


export  function  scrollTo_(cur_name){
  console.log("StartPage",cur_name,
  document.querySelector("._start").offsetHeight,
  document.querySelector("._body").offsetHeight
  );
  return;
  var menuHeight = document.querySelector("."+cur_name).offsetHeight;
  console.log("menuHeight","."+cur_name,menuHeight);

    
  window.scroll({
    top: menuHeight,
    left: 0, 
    behavior: 'smooth',
  });


  

  };

  export function makePrevNextUid(list_with_uid){
    var previd ="";
    var result ={}
    var prev_map_info ={};
    var next_map_info ={};

    list_with_uid.map(item => {
          //console.log("item.uid",item.uid,previd);
          
            prev_map_info[item.uid] = previd;
          if(previd!=""){            
            next_map_info[previd] =  item.uid;
          }
          
          previd = item.uid;
          

        }

    )
    next_map_info[previd] =  "";
    return {prev_map_info:prev_map_info,next_map_info:next_map_info}
  }

  export  function scrollTo (id)  {
    var dom = document
      .getElementById(id);
      console.log("scrollTo find by id ",id,dom);
      if(!dom) return;
      
    
      dom.scrollIntoView({ behavior: "smooth" });
  };

  export function NewlineText(props) {
    const text = props.text;
    const newText = text.split('\n').map(str => <p>{str}</p>);
    
    return newText;
  }
  
  export default NewlineText;