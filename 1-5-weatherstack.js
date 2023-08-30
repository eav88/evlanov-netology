const http = require ('http')
const yargs = require('yargs/yargs') // Подключаем пакет
const { hideBin } = require('yargs/helpers') // Берём нужную нам функцию
const argv = yargs(hideBin(process.argv))

.option('City',{
    alias: 't',
    type: 'string',
    description: 'Город',
}).argv

if(typeof(argv.t) != "undefined" && argv.t !== null && argv.t !==''){
    var city = argv.t
    const apiWeather = process.env.apiWeather
    const url = `http://api.weatherstack.com/current?access_key=${apiWeather}&query=${city}`
    
    
    http.get(url, (res) => {
        const {statusCode} = res
        if (statusCode !== 200){
            console.log(`statusCode: ${statusCode}`)
            return
        }
    
        res.setEncoding('utf8')
        let rowData = ''
        res.on('data', (chunk) => rowData += chunk)
        res.on('end', () => {
            let parseData = JSON.parse(rowData)
            console.log('Temperature in '+parseData.location.region+' is '+parseData.current.temperature+' C')
        })
    })
}else{
    console.log ("Пожалуйста добавьте в запрос город 'npm run weather *город*'")
}






