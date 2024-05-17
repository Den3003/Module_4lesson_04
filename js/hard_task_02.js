'use strict'

{
  const customMin = (a, b) => a * (a < b) + b * (b <= a);

  console.log(customMin(-13, 5));
}