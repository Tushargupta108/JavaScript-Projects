const form=document.querySelector('form');
form.addEventListener('submit',(e)=>{
   e.preventDefault();
    const boy=document.getElementById("BOY");
    const girl=document.getElementById("GIRL");
    const l1= boy.value.length
    const l2=girl.value.length
    // these l1 and l2 will contains the no of  digit in boy n girl name
    const result=Math.pow(l1+l2,3)%148;
    // formula byself to calculate  love percentage via 
    document.querySelector('h2').textContent=`RESULT:${result}%`;
})