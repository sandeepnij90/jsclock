'use strict';

var secondHand = document.querySelector('.second-hand');
var minuteHand = document.querySelector('.min-hand');
var hourHand = document.querySelector('.hour-hand');
function setDate() {
  var now = new Date();

  // seconds
  var seconds = now.getSeconds();
  var secondsDegrees = seconds / 60 * 360 + 90;
  seconds == 0 ? secondHand.style.transition = "0s" : '';
  seconds == 1 ? secondHand.style.transition = "0.7s" : '';
  secondHand.style.transform = 'rotate(' + secondsDegrees + 'deg)';

  // minutes
  var minutes = now.getMinutes();
  var minutesDegrees = minutes / 60 * 360 + 90;
  minuteHand.style.transform = 'rotate(' + minutesDegrees + 'deg)';

  // minutes
  var hours = now.getHours();
  console.log(hours);
  var hoursDegrees = hours / 12 * 360 + 90;
  hourHand.style.transform = 'rotate(' + hoursDegrees + 'deg)';
}

setInterval(setDate, 1000);

