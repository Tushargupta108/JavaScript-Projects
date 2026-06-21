const body=document.querySelector('body');
body.addEventListener('click',(e)=>{

    console.log(e.clientX,e.clientY)
    // threse client x and y gives the coordinates of click event on body jis jagah touch hoga us jahgah ke x and y coordinates dega
     const circlElement=document.createElement('div');
     circlElement.classList.add('circle');
     circlElement.textContent="HI";

//     //What it does
// document → Represents the entire HTML page.
// createElement('div') → Creates a new <div> element in memory.
// const circleElement → Stores that newly created div in a variable.
// Example
// After this line, JavaScript has created:
// <div></div>
// But it is not visible on the page yet because it hasn't been added to the DOM.

// Line 2
// circleElement.classList.add('circle');
// What it does
// Adds a CSS class named circle to that div.
// Now the div becomes:
// <div class="circle"></div>
// By adding the circle class, the div automatically gets cirlce  styles derived in css file and looks like a  circle.
//
// div is created then class provide to that - nd from that class it transformed into circle\ 
// when ever click event happen a new div of circle made everytime 




const color = ['red','blue','purple','pink','green','orange','yellow'];
circlElement.style.backgroundColor=color[Math.floor(Math.random()*7)]
// colors filled into thAT circle and 7 is size of color array

circlElement.style.top=`${e.clientY}px`
circlElement.style.left=`${e.clientX}px`

// circlElement.style.left=`${e.clientX-25}px` if we do this then origin of bubbling start exactly from clicked place

// these two line will tell server /body from to and left ki click top/left se kitna door hai

 body.append(circlElement);
//  before that only div was created in memory not connected with body

   setTimeout(() => {
    circlElement.remove();  
   }, 5000);


})






