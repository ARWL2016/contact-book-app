const Contact = require('./contactModel'); 
const Chalk = require('chalk'); 
const util = require('util'); 

module.exports = {
  hello(req, res) {
    console.log(Chalk.red('HELLO HANDLER CALLED')); 
    res.send({hi: 'greetings from contactsController.hello'})
  }, 

  create(req, res, next) {
    const contactProps = req.body;

    console.log(util.inspect(contactProps, false, null));
    console.log(Chalk.red('CREATE HANDLER CALLED')); 
    Contact.create(contactProps)
     .then(driver => res.send(driver))
     .catch(next); 
  }, 

  index(req, res, next) {
    console.log(Chalk.red('INDEX HANDLER CALLED')); 
    Contact.find()
      .then(contacts => res.send(contacts))
      .catch(next); 
  }, 

  delete(req, res, next) {
    const contactId = req.body.id; 

    console.log(Chalk.red('DELETE HANDLER CALLED')); 
    console.log(util.inspect(contactId, false, null)); 
 
    Contact.findByIdAndRemove({_id: contactId })
      .then((contact) => res.status(204).send(contact)) //sends no res?
      .catch(next); 
  }
}