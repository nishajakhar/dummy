const express = require('express')
const app = express()
const port = 5000;
const expressHbs = require('express-handlebars');
let Handlebars = require('handlebars');
const path = require('path');
const FRONT_CONSTANTS = 'http://localhost:5000';

app.use('/uploads', express.static('uploads'));

var hbs = expressHbs.create({
  extname: 'hbs',
  defaultLayout : 'layout',
  layoutsDir : __dirname +'/views/layouts/',
  partialsDir: __dirname + '/views/partials/'

});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs'); 

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    let renderParams = {
        layout: 'layout',
        title: 'Product List',
        constants: FRONT_CONSTANTS
      }
    
      res.render('index', renderParams);
      
    });

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))