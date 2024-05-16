'use strict'

{
  const minNumber = (a, b) => a - (Math.abs(a - b) + (a - b)) / 2;
  
  console.log(minNumber(-5, 5));
}