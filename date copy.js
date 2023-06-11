const yargs = require('yargs/yargs') // Подключаем пакет
const { hideBin } = require('yargs/helpers') // Берём нужную нам функцию
const argv = yargs(hideBin(process.argv)).argv // Обрабатываем аргументы

let currentDate = new Date();

let currentUpDate = (currentDate.getFullYear());


console.log(currentUpDate) // Выводим результат в консоль


const nums = process.argv.slice(2).map(n => +n)

const sum = nums.reduce((acc, cur) => acc + cur, 0)

console.log(`sum: ${sum}`)