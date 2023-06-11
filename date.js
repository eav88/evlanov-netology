#!/usr/bin/env node
const yargs = require('yargs/yargs') // Подключаем пакет
const { hideBin } = require('yargs/helpers') // Берём нужную нам функцию
const argv = yargs(hideBin(process.argv))

.option('Year',{
    alias: 'y',
    type: 'number',
    description: 'Год',
})
.option('Month',{
    alias: 'm',
    type: 'number',
    description: 'Месяц',
})
.option('Day',{
    alias: 'd',
    type: 'number',
    description: 'День',
})
.option('add',{
    alias: 'a',
    type: 'boolean',
    description: 'Прибавить дату',
})
.option('sub',{
    alias: 's',
    type: 'boolean',
    description: 'Вычесть дату',
})
.option('current',{
    alias: 'c',
    type: 'boolean',
    description: 'Текущая дата',
})


.argv


if(argv.current == true){
    yDate = new Date().getFullYear()
    mDate = new Date().getMonth()
    dDate = new Date().getDate()

    console.log(dDate+'/'+mDate+'/'+yDate)
}

if(argv.add == true){
    if(typeof(argv.y) != "undefined" && argv.y !== null){var yDate = new Date().getFullYear()+ argv.y } else {var yDate = new Date().getFullYear()}
    if(typeof(argv.m) != "undefined" && argv.m !== null){var mDate = new Date().getMonth()+ argv.m } else {var mDate = new Date().getMonth()}
    if(typeof(argv.d) != "undefined" && argv.d !== null){var dDate = new Date().getDate()+ argv.d } else {var dDate = new Date().getDate()}

    console.log(dDate+'/'+mDate+'/'+yDate)
}

if(argv.sub == true){
    if(typeof(argv.y) != "undefined" && argv.y !== null){var yDate = new Date().getFullYear()- argv.y } else {var yDate = new Date().getFullYear()}
    if(typeof(argv.m) != "undefined" && argv.m !== null){var mDate = new Date().getMonth()- argv.m } else {var mDate = new Date().getMonth()}
    if(typeof(argv.d) != "undefined" && argv.d !== null){var dDate = new Date().getDate()- argv.d } else {var dDate = new Date().getDate()}

    console.log(dDate+'/'+mDate+'/'+yDate)
}



