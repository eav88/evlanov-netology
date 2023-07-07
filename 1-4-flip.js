// Домашнее задание к занятию «1.4. Потоки. Модули: path, fs»

const random_number = Math.floor(Math.random() * 2)
if(random_number == 0){coins_result = "орел"}
if(random_number == 1){coins_result = "решка"}

let flip_coin = 'Я бросил монетку, отгадай орел или решка?'
let result_yes = 'Угадали'
let result_no = 'Не угадали'
let result_date = new Date()

console.log(flip_coin);

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const fs = require('node:fs')

const rl = readline.createInterface({ input, output });

rl.on('line', function (answer) {
    answer = answer.toLowerCase()
    console.log(answer)
    if (answer == coins_result) {
        fs.appendFile('1-4-flip-log.json','Дата и время броска: '+result_date.toLocaleDateString() +" - "+result_date.toLocaleTimeString()+' '+result_yes+' '+coins_result+'\n', function (){})
        console.log(result_yes); rl.close();
    }
    if (answer != coins_result) { 
        fs.appendFile('1-4-flip-log.json','Дата и время броска: '+result_date.toLocaleDateString() +" - "+result_date.toLocaleTimeString()+' '+result_no+' '+coins_result+'\n', function (){})
        console.log(result_no);rl.close(); 
    }
});