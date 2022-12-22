const hourSpan = document.getElementById("hour");
const minuteSpan = document.getElementById("minute");
const secondsSpan = document.getElementById("seconds");
const amorpmSpan = document.getElementById("amorpm");

function changeTime(){
    const date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds()
    console.log(hour, minutes, seconds);

    hourSpan.textContent = hour;
    minuteSpan.textContent = minutes;
    secondsSpan.textContent = seconds

    if(hour >= 0 || hour<= 12){
        amorpm = "AM"
    }
    else{
        amorpm = "PM"
    }
    amorpmSpan.textContent = amorpm;
}

setInterval(changeTime, 1000)