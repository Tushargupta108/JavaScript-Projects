const form =document.querySelector('form')
const answer={
    q1: "sachin tendulkar",
    q2: "West Indies" ,
    q3:"sachin tendulkar",
    q4:"264",
    q5:"Muttiah Muralitharan"
}
// answer sored by devloper which req to check user  answers
form.addEventListener('submit',(e)=>{
   e.preventDefault()
//     prevents from form sumit automatically

    const data = new FormData(form);
    //  formdata=> creates an object containnig all the forms feilds
    let finalscore=0
    // used to count score acheived on correct key value pair of user submitted matching with provided key values of devloper
     for (let [name, value] of data.entries()) {
        // isme value jo user n fill kari hogi
        // entries=>returns all the form data as kwy value pairs
        if(answer[name]==value){
            // check key of answer object does current value matching with answer[key]'s value here answer[name] is not q1 its his value stored in answer
                        finalscore+=1;
        }
        
     }
    //  what this loop does=> take one entry at a time from data.entry
    // put the first item into name and second into value
    
    const result=document.getElementById("out");
    result.textContent=`your score is ${finalscore} out of 5`
    // out was another div container after that 5 quiz quiz containers 

})