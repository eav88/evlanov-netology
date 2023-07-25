const express = require('express')
const router = express.Router()
const fs = require('fs')
const { title } = require('process')
const { v4: uuid } = require('uuid')
const fileMulter = require('../routes/bookfile.js')
const { Console } = require('console')


var bookdeletename = 'none'
var bookcreatename = 'none'
var bookcreate = false
var bookdelete = false


// Подключение bootstrap
router.get('/bootstrap/bootstrap.css', (req, res) => {
    res.sendFile(__dirname+'/bootstrap/bootstrap.css')
});

router.get('/bootstrap/bootstrap-icons.css', (req, res) => {
    res.sendFile(__dirname+'/bootstrap/bootstrap-icons.css')
});

router.get('/bootstrap/bootstrap.bundle.js', (req, res) => {
    res.sendFile(__dirname+'/bootstrap/bootstrap.bundle.js')
});

router.get('/bootstrap/fonts/bootstrap-icons.woff', (req, res) => {
    res.sendFile(__dirname+'/bootstrap/fonts/bootstrap-icons.woff')
});

router.get('/bootstrap/fonts/bootstrap-icons.woff2', (req, res) => {
    res.sendFile(__dirname+'/bootstrap/fonts/bootstrap-icons.woff2')
});


// Подключение bootstrap create
router.get('/create/bootstrap/bootstrap.css', (req, res) => {
    res.sendFile(__dirname+'/bootstrap/bootstrap.css')
});

router.get('/create/bootstrap/bootstrap-icons.css', (req, res) => {
    res.sendFile(__dirname+'/bootstrap/bootstrap-icons.css')
});

router.get('/create/bootstrap/bootstrap.bundle.js', (req, res) => {
    res.sendFile(__dirname+'/bootstrap/bootstrap.bundle.js')
});

router.get('/create/bootstrap/fonts/bootstrap-icons.woff', (req, res) => {
    res.sendFile(__dirname+'/bootstrap/fonts/bootstrap-icons.woff')
});

router.get('/create/bootstrap/fonts/bootstrap-icons.woff2', (req, res) => {
    res.sendFile(__dirname+'/bootstrap/fonts/bootstrap-icons.woff2')
});

// Подключение bootstrap edit
router.get('/edit/bootstrap/bootstrap.css', (req, res) => {
    res.sendFile(__dirname+'/bootstrap/bootstrap.css')
});

router.get('/edit/bootstrap/bootstrap-icons.css', (req, res) => {
    res.sendFile(__dirname+'/bootstrap/bootstrap-icons.css')
});

router.get('/edit/bootstrap/bootstrap.bundle.js', (req, res) => {
    res.sendFile(__dirname+'/bootstrap/bootstrap.bundle.js')
});

router.get('/edit/bootstrap/fonts/bootstrap-icons.woff', (req, res) => {
    res.sendFile(__dirname+'/bootstrap/fonts/bootstrap-icons.woff')
});

router.get('/edit/bootstrap/fonts/bootstrap-icons.woff2', (req, res) => {
    res.sendFile(__dirname+'/bootstrap/fonts/bootstrap-icons.woff2')
});

// Формирование Каталога
class book {
    constructor(id = uuid(),title, description , authors , favorite , fileCover , fileName , fileBook){
        this.id = id,
        this.title = title,
        this.description = description,
        this.authors = authors,
        this.favorite = favorite,
        this.fileCover = fileCover,
        this.fileName = fileName,
        this.fileBook = fileBook
    }
}

// constructor(id = uuid(),title = 'title Book', description = 'description Book', authors = 'authors Book', favorite = 'favorite Book', fileCover = 'fileCover Book', fileName='fileName Book', fileBook='fileBook Book')



// Массив с книгами
const catalog = [
    new book('bc4970c2-68c1-45c4-bdf8-aef93fd4d2bd', '451 градус по Фаренгейту','Будущее, где книги запрещены, пожарник Монтэг ищет свет в мире без слов. Рей Брэдбери, классика дистопии','Рэй Брэдбери','true','https://readrate.com/img/pictures/book/292/29286/29286/w240h400-cc0528ab.jpg','ЛитРес','files\\451.txt'),
    new book('157b0325-2715-4ed0-8061-e4caf3a783a1', 'Маленький принц','Путешествия маленького принца, уроки о жизни. Антуан де Сент-Экзюпери, волшебная сказка.','Антуан де Сент-Экзюпери','false','https://readrate.com/img/pictures/book/293/29327/29327/w240h400-7e9028bd.jpg','Лабиринт','files\\litleprince.txt'),
    new book('157b0325-2715-4ed0-8061-e4caf3a783a2', 'Маленький принц','Путешествия маленького принца, уроки о жизни. Антуан де Сент-Экзюпери, волшебная сказка.','Антуан де Сент-Экзюпери','false','https://readrate.com/img/pictures/book/293/29327/29327/w240h400-7e9028bd.jpg','Лабиринт','files\\litleprince.txt'),
    new book('157b0325-2715-4ed0-8061-e4caf3a783a3', 'Маленький принц','Путешествия маленького принца, уроки о жизни. Антуан де Сент-Экзюпери, волшебная сказка.','Антуан де Сент-Экзюпери','false','https://readrate.com/img/pictures/book/293/29327/29327/w240h400-7e9028bd.jpg','Лабиринт','files\\litleprince.txt'),    new book('157b0325-2715-4ed0-8061-e4caf3a783aa', 'Маленький принц','Путешествия маленького принца, уроки о жизни. Антуан де Сент-Экзюпери, волшебная сказка.','Антуан де Сент-Экзюпери','false','https://readrate.com/img/pictures/book/293/29327/29327/w240h400-7e9028bd.jpg','Лабиринт','files\\litleprince.txt'),
    new book('157b0325-2715-4ed0-8061-e4caf3a783a33333', 'Маленький принц','Путешествия маленького принца, уроки о жизни. Антуан де Сент-Экзюпери, волшебная сказка.','Антуан де Сент-Экзюпери','false','https://readrate.com/img/pictures/book/293/29327/29327/w240h400-7e9028bd.jpg','Лабиринт','files\\litleprince.txt'),    
];



// Массив с книгами 2 (тест)
const catalog2 = [ 
    {
        id: "bc4970c2-68c1-45c4-bdf8-aef93fd4d2bd",
        title:"451 градус по Фаренгейту",
        description:"Будущее, где книги запрещены, пожарник Монтэг ищет свет в мире без слов. Рей Брэдбери, классика дистопии",
        authors: "Рэй Брэдбери",
        favorite: "true",
        fileCover: "https://readrate.com/img/pictures/book/292/29286/29286/w240h400-cc0528ab.jpg",
        fileName: "ЛитРес",
        fileBook: "http://localhost:3000/files/451.txt"

    },
    {
        id: "157b0325-2715-4ed0-8061-e4caf3a783aa",
        title:"Маленький принц",
        description:"Путешествия маленького принца, уроки о жизни. Антуан де Сент-Экзюпери, волшебная сказка.",
        authors: "Антуан де Сент-Экзюпери",
        favorite: "false",
        fileCover: "https://readrate.com/img/pictures/book/293/29327/29327/w240h400-7e9028bd.jpg",
        fileName: "Лабиринт",
        fileBook: "http://localhost:3000/files/litleprince.txt"
    }
]



// Вывод всех книг
router.get('/', function (req, res) {
    
    res.render('catalog', {
        title: 'Каталог книг',
        iconpage:'bi bi-book',
        catalog: catalog,
        bookdelete: bookdelete,
        bookdeletename: bookdeletename
    })
    bookdelete = false
    bookdeletename = 'none'
});

// Страница добавить книгу
router.get('/create', function(req, res) {
    
    res.render('create', {
        title: 'Добавить книгу',
        iconpage:'bi bi-card-text',
        catalog: {},
    })
});

// Событие добавить книгу
router.post('/create',fileMulter.single('fileBook'), function (req, res){
    const {title, description, authors, favorite, fileCover, fileName, fileBook} = req.body;
    if(req.file){
        const {path} = req.file

    } else{ 
        path='none'
    }
    
    
    

    const newbook = new book( uuid() ,title, description , authors , favorite , fileCover , fileName , path)
    catalog.push(newbook)

    res.redirect('/catalog')

});

router.post('/uptest', 
fileMulter.single('bookfilekey'),
(req, res) => {
    if(req.file){
        const {path} = req.file
        res.json(req.file)
        
    }
    res.json()
})

// Получиит информацию о книге по id
router.get('/:id', function (req, res) {
    const {id} = req.params
    const idx = catalog.findIndex(el => el.id === id)

    if (idx === -1) {
        res.redirect('/404');
    } 

    if(catalog[idx].fileBook == 'none'){console.log(false, ' txt')}
        
    res.render("view", {
        catalog: catalog[idx],
        title: "Просмотр - "+catalog[idx].title,
    });
    
});

// Получиит информацию о книге по id для изменения
router.get('/edit/:id', function (req, res) {
    const {id} = req.params
    const idx = catalog.findIndex(el => el.id === id)

    if (idx === -1) {
        res.redirect('/404');
    } 
        
    res.render("edit", {
        catalog: catalog[idx],
        title: "Просмотр - "+catalog[idx].title,
    });
    
});

// Изменить книггу по id
router.post('/edit/:id', fileMulter.single('fileBook'), function(req, res) {
    const {id} = req.params
    

    const idx = catalog.findIndex(el => el.id === id)
    if (idx === -1) {
        res.redirect('/404');
    }
    
    
    const {title, description, authors, favorite, fileCover, fileName, fileBook} = req.body;
    // const {path} = req.file
    // const {title, description, authors, favorite, fileCover, fileName, fileBook=path} = req.body;
    console.log(title, fileBook)
    
    catalog[idx] = {
        ...catalog[idx], title, description, authors, favorite, fileCover, fileName, fileBook
    }


    res.redirect(`/catalog/${id}`);

});

// Скачать файл книги
router.get('/files/:urlfile', function (req, res) {
    const {urlfile} = req.params
    res.download('files/'+urlfile, function (err) {
        if (err) { throw (err)}
    });
})

// Удалить книгу
router.post('/delete/:id',function (req, res) {
    const {id} = req.params;
    const idx = catalog.findIndex(el => el.id === id);

    if (idx === -1) {
        res.redirect('/404')
    } 
    bookdeletename = catalog[idx].title
    catalog.splice(idx, 1)
    bookdelete = true
    res.redirect(`/catalog`)
});


module.exports = router;