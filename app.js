const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
function setDate() {
  const now = new Date();

  // seconds
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds /60) * 360 + 90;
  seconds == 0 ? secondHand.style.transition = "0s" : '';
  seconds == 1 ? secondHand.style.transition = "0.7s" : '';
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;



  // minutes
  const minutes = now.getMinutes();
  const minutesDegrees = minutes / 60 * 360 +90
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  // minutes
  const hours = now.getHours();
  console.log(hours);
  const hoursDegrees = (hours / 12 * 360) + 90
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate,1000);
