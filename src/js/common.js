
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