/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */
    const dayEl = document.getElementById("days");
    const hourEl = document.getElementById("hours");
    const minEl = document.getElementById("mins");
    const secEl = document.getElementById("secs");
    
    var interval = setInterval(countdown, 1000);
    function countdown() {
        let newYearsDate = new Date("1 Jan 2021");
        // newYearsDate.setHours(18);
        // newYearsDate.setMinutes(0);
        // newYearsDate.setSeconds(0);
        const currentDate = new Date();
      
        const totalSeconds = (newYearsDate - currentDate) / 1000;
        const days = Math.floor(totalSeconds / 3600 / 24);
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const mins = Math.floor(totalSeconds / 60) % 60;
        const seconds = Math.floor(totalSeconds) % 60;
      
        if(hours==0&& mins==0&&seconds==0){
          clearInterval(interval);
          alert('Happy New Year!!!')

        }

        dayEl.innerHTML = days;
        hourEl.innerHTML = formatTime(hours);
        minEl.innerHTML = formatTime(mins);
        secEl.innerHTML = formatTime(seconds);

    }
    
    function formatTime(time){
      return time < 10 ? `0${time}` : time;
    }
    
    
    countdown();
        