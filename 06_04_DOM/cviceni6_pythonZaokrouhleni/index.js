'use strict';

const round = (number) => {
  const whole = Math.trunc(number);
  const tenth = number - whole;  
  if (tenth < 0.5) {
    return whole;
  } else if (tenth > 0.5) {
    return (whole + 1);
  } else if (tenth === 0.5) {
    if (whole % 2 === 0) {
      return whole;
    } else {
      return (whole + 1);
    }
}

document.write(round(56.5));