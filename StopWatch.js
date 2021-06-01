
$(document).ready(function(){

function timeToString(time){
  let timeHH = time/3600000;
  let hh = Math.floor(timeHH);
  let timeMM = (timeHH - hh) * 60;
  let mm = Math.floor(timeMM);
  let timeSS = (timeMM - mm) * 60;
  let ss = Math.floor(timeSS);
  let timeMS = (timeSS - ss) * 100;
  let ms = Math.floor(timeMS);
  mm = mm.toString().padStart(2, '0');
  ss = ss.toString().padStart(2, '0');
  ms = ms.toString().padStart(2, '0');
  return `${mm}:${ss}:${ms}`;
}

let startTime;
let elapsedTime = 0;
let timerInterval;

$('#play').click(function(){
  startTime = Date.now() - elapsedTime;

  timerInterval = setInterval(function(){
  elapsedTime = Date.now() - startTime;
  $('#timeToDisplay').html(`${timeToString(elapsedTime)}`);
  setVisibility("play");
},10);
});



$('#pause').click(function(){
  clearInterval(timerInterval);
  setVisibility("pause");
});



$('#reset').click(function(){
  clearInterval(timerInterval);
  $('#timeToDisplay').html("00:00:00");
  elapsedTime = 0;
  setVisibility("pause");
});

function setVisibility(action){
  var buttonToDisplay = (action === "play") ? $('#pause') : $('#play');
  var buttonToHide = (action === "play") ?  $('#play') : $('#pause');
  buttonToDisplay.css("display", "block");
  buttonToHide.css("display", "none");
}
});
