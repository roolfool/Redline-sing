const readlineSync = require('readline-sync');

console.log('Расчет времени пути');

const distan = readlineSync.question('Дистанция: '); 
const speed = readlineSync.question('Скорость: '); 

const calculateTime = (a, b) => {
    
    const result = a / b;
    return result;
};

const time = calculateTime(distan, speed);
const hours = Math.round(time);
const minute = Math.round((time - hours) * 100);

console.log(`Ответ: ${hours}ч. ${minute}м.`);