const result = document.querySelector("#result");

const OlympicTime = new Date(2028, 6, 14).getTime();
// this will be in miliseconds by default

setInterval(() => {
    const currentTime = Date.now();

    let timer = OlympicTime - currentTime;
    // it will keep change so we  initialixze by let


    const day = Math.floor(timer / (1000 * 60 * 60 * 24));
    // 1 SEC =1000 MILISECONDS ->1 MIN=60 SEC-> 60 MIN =1 HOURS-> 24 HOUR=1 DAY
    timer %= (1000 * 60 * 60 * 24);
    // timer modulo days give exact days left and exact mili seconds left which  again used to showcase hour minutes and seonconds left

    const hour = Math.floor(timer / (1000 * 60 * 60));
    timer %= (1000 * 60 * 60);

    const minutes = Math.floor(timer / (1000 * 60));
    timer %= (1000 * 60);

    const seconds = Math.floor(timer / 1000);
    timer %= 1000;

    const milliseconds = timer;

    result.textContent =
        `DAYS: ${day}
        
         HOURS: ${hour}

         MINUTES: ${minutes}

         SECONDS: ${seconds}
         
         MILLISECONDS: ${milliseconds}`;

}, 1);