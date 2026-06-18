const parent=document.getElementById('parent');
//parent of button is selected as object
parent.addEventListener('click',(e)=>{
   const child=e.target;
//    child will  points to that element on which event is performed as click on i=other button child changes  pointing to buttons according to event
//    now child= button  which will be target 
  const body=document.querySelector('body')

  body.style.backgroundColor=child.id;
//   body  converted into object then styling done on it child to id points to color name which were make in html file 
// as body.backgrounf=dcolor=red when red buton  clicked
})
