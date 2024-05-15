'use strict'

{
  const calculate = (sumBasket, sumProducts, promo) => {
    let modifySumBasket = sumBasket;
    if (sumProducts > 10) {
      modifySumBasket -= modifySumBasket * 0.03;
    }
    if (modifySumBasket > 30000) {
      modifySumBasket -= (modifySumBasket - 30000) * 0.15;
    }
    if (promo === 'METHED') {
      modifySumBasket -= modifySumBasket * 0.10;
    }
    if (promo === 'G3H2Z1' && modifySumBasket > 2000) {
      modifySumBasket -= 500;
    }
    return modifySumBasket;
  }

  console.log(calculate(100, 11, 'G3H2Z1'));
}