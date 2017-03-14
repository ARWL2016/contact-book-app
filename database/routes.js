const ContactsController = require('./contactsController'); 

module.exports = (app) => {
  app.get('/api', ContactsController.hello); 

  app.get('/api/contacts', ContactsController.index); 
  app.post('/api/contacts', ContactsController.create); 
  app.post('/api/edit', ContactsController.edit); 
  app.post('/api/delete', ContactsController.delete); 

}