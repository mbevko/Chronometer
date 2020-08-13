let miliSec = document.querySelector(".miliseconds")
let second = document.querySelector(".seconds");
let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");
miliSec.innerHTML = '00';
second.innerHTML = '00';

let ms = 0;
let sec = 0;

function Timer(){
  ms++
  miliSec.innerHTML = ms;
  if(ms > 99){
    ms = 1;
    sec++;
    second.innerHTML = sec;
  };
  if(ms < 9){
    miliSec.innerHTML = '0' + ms;
  };
  if(sec < 9){
    second.innerHTML = '0' + sec;
  };
};

start.addEventListener('click',() => {
   startTimer = setInterval(Timer, 10);
});
stop.addEventListener('click',() => {
  clearInterval(startTimer);
});

reset.addEventListener('click',() => {
  clearInterval(startTimer);
  miliSec.innerHTML = '00';
  second.innerHTML = '00';
  ms = 0;
  sec = 0;
});