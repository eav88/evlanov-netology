const random_number = Math.floor(Math.random() * 100)
// console.log("Число: " + random_number)

console.log("Node: Я загадал число от 1 до 100, отгадай мое число")

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.on('line', function (answer) {

    if (answer == random_number) { console.log("Node: число отгадано"); rl.close();}
    if (answer < random_number) { console.log("Node: Загаднное число больше "+answer) }
    if (answer > random_number) { console.log("Node: Загаднное число меньше "+answer) }
});



