const Contact = require('./contactModel'); 
const Chalk = require('chalk'); 

module.exports = {
  hello(req, res) {
    console.log(Chalk.red('HELLO HANDLER CALLED')); 
    res.send({hi: 'greetings from contactsController.hello'})
  }, 

  create(req, res, next) {
    const contactProps = req.body; 
    console.log(Chalk.red('CREATE HANDLER CALLED')); 
    Contact.create(contactProps)
     .then(driver => res.send(driver))
     .catch(next); 
  }
}