const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const TodoRoutes = require('./routes/listroute')
const mongoConnect = require('./util/database').mongoConnect;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(TodoRoutes);


mongoConnect(()=>{
    app.listen(process.env.PORT || 3000);
})