const readlineSync = require('readline-sync');

console.log('Подсчет количества слов в строке');

const stroka = readlineSync.question('Строка: '); 

const countWords = (a) => {
    
    const words = a.split(' ');
    return words.length;
};

console.log(`Ответ: ${countWords(stroka)}`);