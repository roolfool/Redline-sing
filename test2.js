const readlineSync = require('readline-sync');

console.log('Конвертер градусов Цельсия в Фаренгейты');

const сelsius = Number(readlineSync.question('Цельсии: ')); 

const celsiusToFahrenheit = (f) => {
    
    const fahrenheit = f * 9/5 + 32;
    return fahrenheit;
};

console.log(`Ответ: ${celsiusToFahrenheit(сelsius)}F`);