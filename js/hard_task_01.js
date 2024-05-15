'use strict'

{
  const calcGreatestCommonDivisor = (a, b) => {
    if (b === 0) {
      return a;
    } else {
      return calcGreatestCommonDivisor(b, a % b);
    }
  }

  const result = calcGreatestCommonDivisor(24, 36);
  console.log(`Наибольший общий делитель чисел равен: ${result}`);
}