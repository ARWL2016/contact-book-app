const ContactsController = require('./contactsController'); 

module.exports = (app) => {
  app.get('/api', ContactsController.hello); 

  app.post('/api/contacts', ContactsController.create); 

}