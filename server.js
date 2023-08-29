const express = require('express');
const path = require('path');
  
const app = express();

const studentdb = require('./data/students-db');

//Configure the app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

  
app.get('/', function (req, res) {
  res.send('<h1>Hello World!</h1>');
});
  
app.listen(3000, function() {
  console.log('Listening on port 3000');
});

app.get('/', function (req, res) {
    // Path must start with a leading slash
    res.redirect('/students');
});

app.get('/home', function (req, res) {
    //Never begin the name of the template 
    // with a forward slash
    res.render('home');
});

app.get('/students', function (req, res) {
    const students = studentdb.getAll();
    res.render('students/index', { students });
});

app.get('/students/:id', function(req, res) {
    console.log(`The value for the :id route parameter is: ${req.params.id}`);
    res.render('students/show', {student: studentdb.getOne(req.params.id)});
  });