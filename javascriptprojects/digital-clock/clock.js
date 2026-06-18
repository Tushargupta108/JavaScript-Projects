const div=document.querySelector('div');

//console.log(time)
// time->shows us time, time.tolocalestring shows india time with date ,time.tolocaletimestring() shows only time

setInterval(()=>{
    let time=new Date()
    div.textContent=time.toLocaleTimeString()
},1000)
// set interval is a callback function which calls the time display function after every 1 milisecond
