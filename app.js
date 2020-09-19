const { static } = require('express');
//imports

var express = require('express');
var app = express();
var port = 3000;

//static files

app.use(express.static('public'));
app.use('/css',express.static(__dirname + 'public/css'));
app.use('/js',express.static(__dirname + 'public/js'));
app.use('/images',express.static(__dirname + 'public/images'));

//views stting

app.set('views','./views');
app.set('view engine','ejs');

//getting views

app.get('',(req,res) => {
    res.render('index',{text: "This is home page"})
})

app.get('/about',(req,res) => {
    res.render('about')
})

//Listen on port 3000
app.listen(port);