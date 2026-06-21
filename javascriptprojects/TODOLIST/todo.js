const form=document.querySelector('form')
const alltask=document.querySelector('#alltask')
// div section in body slected
const input=document.querySelector('input')
// input feild of form slected
form.addEventListener('submit',(e)=>{
 e.preventDefault();
  
 const text=input.value.trim();
//  this wil get text from user input in input feild and trim used to ignore spacing provided bw  input from user

const parent=document.createElement('div')
// form this area for task marking completted or not delete
parent.style.marginTop="20px";

const task=document.createElement('span');
//  div box k ander span box jispe tak likha hoga
task.textContent=text;


task.style.marginRight="20px"
// give space so not collide with delete button


 const deletebutton=document.createElement('button')
 deletebutton.textContent="DELETE"
//  ANOTHER SECTION OF DELETE BUTTON ADDED  BESIDE SPAN UNDER DIV AREA
deletebutton.style.width="50px"

const donebutton=document.createElement('button')
 donebutton.textContent="Done"
 donebutton.style.marginRight="10px";
 donebutton.style.width="50px"

//  now 3no sectionof buttons and task area created and put them into single box parent box
parent.append(task,donebutton,deletebutton)

// now put this whole parent box into dom
alltask.append(parent)
// alltask was selectged into dom prev

deletebutton.addEventListener('click',()=>{
  parent.remove();
})

donebutton.addEventListener('click',()=>{
    task.style.textDecoration='line-through';
    task.style.color='pink';
})


})