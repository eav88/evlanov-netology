const yargs = require('yargs/yargs') // Подключаем пакет
const { hideBin } = require('yargs/helpers') // Берём нужную нам функцию
const argv = yargs(hideBin(process.argv)).argv // Обрабатываем аргументы

let currentDate = new Date();

currentDate + 2000;


console.log(currentDate) // Выводим результат в консоль
