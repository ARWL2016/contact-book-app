const express = require('express'); 
const chalk = require('chalk'); 
const open = require('open'); 
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser'); 
const routes = require('./database/routes');

const app = express(); 
const port = process.env.PORT || 3000; 

mongoose.Promise = global.Promise; 
mongoose.connect('mongodb://localhost/contactBook'); 

app.use(bodyParser.json()); 
routes(app); 


app.use(express.static('client/public'));

app.listen(port, (err) => {
    if (err) {
        console.log(chalk.red(err)); 
    } else {
        open(`http://localhost:${port}`);
        console.log(chalk.blue(`Server running on port ${port}. Application served from \"./public/\". Run webpack to recompile changes.`));
    }
}); 