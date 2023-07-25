const express = require('express')
const http = require('http')
const fs = require('fs')
const PORT = 3000

const app = express()
const myserver = http.Server(app)


// Файлы Bootstrap

// Проверка папок
fs.stat(__dirname+'/tmp/bootstrap', function (err,stat) {
    if (err){
        // Создание папки
        fs.mkdir(__dirname+'/tmp/bootstrap', function(err){
            if (err) { console.log(err)}
        })

        // Копирование файлов
        fs.copyFile(__dirname+'/node_modules/bootstrap/dist/css/bootstrap.css', 'tmp/bootstrap/bootstrap.css', function (err) {
            if (err) {console.log("Error Found:", err);}
        })
        
        fs.copyFile(__dirname+'/node_modules/bootstrap/dist/js/bootstrap.bundle.js', 'tmp/bootstrap/bootstrap.bundle.js', function (err) {
            if (err) {console.log("Error Found:", err);}
        })

        fs.copyFile(__dirname+'/node_modules/bootstrap-icons/font/bootstrap-icons.css', 'tmp/bootstrap/bootstrap-icons.css', function (err) {
            if (err) {console.log("Error Found:", err);}
        })

        // Fonts file
        fs.stat(__dirname+'/tmp/bootstrap/fonts', function (err,stat) {
            if (err){
                // Создание папки
                fs.mkdir(__dirname+'/tmp/bootstrap/fonts', function(err){
                    if (err) { console.log(err)}
                })
        
                // Копирование файлов
                fs.copyFile(__dirname+'/node_modules/bootstrap-icons/font/fonts/bootstrap-icons.woff', 'tmp/bootstrap/fonts/bootstrap-icons.woff', function (err) {
                    if (err) {console.log("Error Found:", err);}
                })
                fs.copyFile(__dirname+'/node_modules/bootstrap-icons/font/fonts/bootstrap-icons.woff', 'tmp/bootstrap/fonts/bootstrap-icons.woff2', function (err) {
                    if (err) {console.log("Error Found:", err);}
                })
             }else{
                // Папка с файлами уже есть
                console.log('project folder - tmp/bootstrap/fonts',true)}
        })

     }else{
    // Папка с файлами уже есть
    console.log('project folder - tmp/bootstrap',true)}
})


// load html
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/tmp/');
})

app.get('/create.html', function (req, res) {
    res.sendFile(__dirname + '/tmp/create.html');
})

app.get('/view.html', function (req, res) {
    res.sendFile(__dirname + '/tmp/view.html');
})

app.get('/update.html', function (req, res) {
    res.sendFile(__dirname + '/tmp/update.html');
})

app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + '/tmp/index.html');
})

app.get('/catalog.html', function (req, res) {
    res.sendFile(__dirname + '/tmp/catalog.html');
})

app.get('/error.html', function (req, res) {
    res.sendFile(__dirname + '/tmp/error.html');
})

// load botstrap
app.get('/bootstrap/bootstrap.css', function (req, res) {
    res.sendFile(__dirname + '/tmp/bootstrap/bootstrap.css');
})

app.get('/bootstrap/bootstrap.bundle.js', function (req, res) {
    res.sendFile(__dirname + '/tmp/bootstrap/bootstrap.bundle.js')
})

app.get('/bootstrap/bootstrap-icons.css', function (req, res) {
    res.sendFile(__dirname + '/tmp/bootstrap/bootstrap-icons.css')
})

app.get('/bootstrap/fonts/bootstrap-icons.woff', function (req, res) {
    res.sendFile(__dirname + '/tmp/bootstrap/fonts/bootstrap-icons.woff')
})

app.get('/bootstrap/fonts/bootstrap-icons.woff2', function (req, res) {
    res.sendFile(__dirname + '/tmp/bootstrap/fonts/bootstrap-icons.woff2')
})

app.use('/files', express.static(__dirname+'files'))

app.use(function(req, res, next){
    res.redirect('error.html')
    // res.status(404)
    // // console.log('Not found URL: %s',req.url)
    // res.send({ status: 'false', error: 'Not found' })
    // return
});

app.get('/download/testbook', function (req, res) {
    res.download('files/bookdemo.txt', function (err) {
        if (err) {console.log(err)}
    });
})

// web server
myserver.listen(PORT, function () {
    console.log('web server at', PORT, 'http://localhost:'+PORT)
})
