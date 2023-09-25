// let hour = document.getElementById("hour");
// let minute = document.getElementById("minute");
// let seconds = document.getElementById("seconds");
// let set_clock = setInterval(() => {
//     let date_now = new Date();
//     let hr = date_now.getHours();
//     let min = date_now.getMinutes();
//     let sec = date_now.getSeconds();
//     let calc_hr = (hr * 30) + (min / 2);
//     let calc_min = (min * 6) + (sec / 10);
//     let calc_sec = sec * 6;
//     hour.style.transform = `rotate(${calc_hr}deg)`;
//     minute.style.transform = `rotate(${calc_min}deg)`;
//     seconds.style.transform = `rotate(${calc_sec}deg)`;
// }, 1000);

const hour=document.querySelector('.hrs');
const minute=document.querySelector('.min');
const second=document.querySelector('.sec');

setInterval(runClock,1000);

function runClock(){
  const time=new Date();
  const sec=time.getSeconds()/60;
  const min=(sec+time.getMinutes())/60;
  const hrs=(min+time.getHours())/12;
  hour.style.setProperty('--rotation',hrs*360);
  minute.style.setProperty('--rotation',min*360);
  second.style.setProperty('--rotation',sec*360);

}

runClock();