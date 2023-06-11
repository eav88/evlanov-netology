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


if(typeof(argv.d) != "undefined" && argv.d !== null){var dday = argv.d}else{var dday = 0}
if(typeof(argv.m) != "undefined" && argv.m !== null){var mday = argv.m}else{var mday = 0}
if(typeof(argv.y) != "undefined" && argv.y !== null){var yday = argv.y}else{var yday = 0}

if(argv.current == true){
    currentDate = new Date()
    console.log (currentDate.toLocaleDateString())
}

if(argv.add == true){

    currentDate = new Date()
    currentDate.setDate(currentDate.getDate()+dday)
    currentDate.setMonth(currentDate.getMonth()+mday)
    currentDate.setFullYear(currentDate.getFullYear()+yday)

    console.log (currentDate.toLocaleDateString())
}

if(argv.sub == true){
    currentDate = new Date()
    currentDate.setDate(currentDate.getDate()-dday)
    currentDate.setMonth(currentDate.getMonth()-mday)
    currentDate.setFullYear(currentDate.getFullYear()-yday)

    console.log (currentDate.toLocaleDateString())
}