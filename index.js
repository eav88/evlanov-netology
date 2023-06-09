// let nodePath = process.argv[0];
// let appPath = process.argv[1];
// let name = process.argv[2];
// let age = process.argv[3];
// let link = process.argv[4];

// console.log("nodePath: " + nodePath);
// console.log("appPath: " + appPath);
// console.log("-------------------");
// console.log("name: " + name);
// console.log("age: " + age);
// console.log("link: " + link);
// console.log("---------------");

// const random_number = Math.floor(Math.random() * 100)

// console.log("Я загадал число, попробуй угадать: " + random_number)


const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });



rl.question('What is your favorite food? ', (answer) => {
    console.log(`Oh, so your favorite food is ${answer}`);
    rl.close();
});








