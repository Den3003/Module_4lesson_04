'use strict'

{
  const nod = (a, b) => b === 0 ? a : nod(b, a % b);

  console.log(`Наибольший общий делитель чисел равен: ${nod(24, 36)}`);
} 