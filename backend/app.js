const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const routesAdmin = require('./routes/routesAdmin');
const {PORT,mongoURL} = require('./config/config');
const {globalVariable} = require('./config/config');
const routes = require('./routes/routes');
const flash = require('connect-flash');
const session = require('express-session');
const bodyParser=require('body-parser');
const morgan = require('morgan');
const path =require('path');
const app = express();


//config mongodb

mongoose.connect(mongoURL,
{useNewUrlParser:true,
useUnifiedTopology: true 
})
.then((res)=>{
    console.log('database to connect')
})
.catch((err)=>{
    console.log(err,'error to conected to db')
})

//express condfig
app.set('port',PORT);
app.use(express.static(path.join(__dirname, 'public')));
app.engine('.hbs', exphbs({
    defaultLayout: 'default',
    extname :'.hbs'

}))
app.set('view engine','.hbs')


//session and flash
app.use(session({
    secret:'anysecret',
    saveUninitialized:true,
    resave:true
}));

app.use(flash());
app.use(globalVariable);
//middlewares 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))



//Routes
app.use('/',routes)
app.use('/admin',routesAdmin)



app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
})