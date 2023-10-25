const readlineSync = require('readline-sync');

console.log('Расчет скидки в магазине');

const print = Number(readlineSync.question('Стоимость: ')); 
const text = Number(readlineSync.question('Процент: ')); 

const calculateDiscount = (x, y) => {

    let result = x;

    if (Math.floor(y) > 0) {
        result = x -= (x * y) / 100;
    }
    else {
        result = x -= x * y;
    }

    return result;
};

console.log(`Ответ: ${calculateDiscount(print, text)}`);