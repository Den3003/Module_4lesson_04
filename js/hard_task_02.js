'use strict'

{
  const calcMinNumber = (a, b) => a < b ? a : b;
  const userNumberOne = +prompt('Введите первое число', '')
  const userNumberTwo = +prompt('Введите второе число', '')
  const resultCalcMinNumber = calcMinNumber(userNumberOne, userNumberTwo);
  console.log(`Минимальное число ${resultCalcMinNumber}`);
}