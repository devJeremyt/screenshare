const express = require('express'),
        app = express();


//Setup
require('dotenv').config()

app.use(express.static('public'))
app.set('view engine', 'ejs')


app.listen(process.env.PORT, ()=>{
    console.log('Server is running in ' + process.env.NODE_ENV + ' on port ' + process.env.PORT); })