const Contact = require('./contactModel');  
 
module.exports = {
  hello(req, res) { 
    res.send({hi: 'greetings from contactsController.hello'})
  }, 

  create(req, res, next) {
    const contactProps = req.body;

    Contact.create(contactProps)
     .then(driver => res.send(driver))
     .catch(next); 
  }, 

  index(req, res, next) {
    Contact.find()
      .then(contacts => res.send(contacts))
      .catch(next); 
  }, 

  delete(req, res, next) {
    const contactId = req.body.id; 
 
    Contact.findByIdAndRemove({_id: contactId })
      .then((contact) => res.status(204).send(contact)) //sends no res?
      .catch(next); 
  }, 

  edit(req, res, next) {
    const contactProps = req.body;

    Contact.findByIdAndUpdate({_id: contactProps._id}, contactProps)
      .then(() => Contact.findById({_id: contactProps._id}))
      .then(contact => res.send(contact))
      .catch(next); 
  }
}