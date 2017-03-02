const express = require('express'); 
const chalk = require('chalk'); 
const open = require('open'); 

const app = express(); 
const port = process.env.PORT || 3000; 

// app.use(function (req, res, next) {
//     if (req.headers['x-forwarded-proto'] === 'https') {
//         res.redirect('http://' + req.hostname + req.url);
//     } else {
//         next();     
//     }
// });

app.use(express.static('public'));

app.listen(port, (err) => {
    if (err) {
        console.log(chalk.red(err)); 
    } else {
        open(`http://localhost:${port}`)
        console.log(chalk.blue(`Server running on port ${port}. Application served from \"./public/\". Run webpack to recompile changes.`));
    }
}); 