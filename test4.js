const readlineSync = require('readline-sync');

console.log('Расчет периметра и площади прямоугольника');

const width = readlineSync.question('Ширина треугольника: '); 
const height = readlineSync.question('Высота треугольника: '); 

const calculateRectangleProperties = (a, b) => {

    const S = a * b;
    const P = 2 * a + 2 * b;

    const arrya = [S, P];
    return arrya;
};

console.log(`Площадь: ${calculateRectangleProperties(width, height)[0]}\nПериметр: ${calculateRectangleProperties(width, height)[1]}`);