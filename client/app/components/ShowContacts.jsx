const React = require('React'); 
const axios = require('axios');
const ContactList = require('ContactList'); 

var ShowContacts = React.createClass({
  getInitialState: function() {
    return {
      contacts: [{firstName: '', lastName: ''}], 
      deleteState: 'ready'
    }; 
  }, 

  componentWillMount: function() {
    this.getContacts(); 
  }, 

  getContacts() {
    axios.get('/api/contacts')
      .then((list) => {
        this.setState({contacts: list.data});
      })
  },

  deleteHandler(id) {
    
    console.log(id);
    axios.post('/api/delete', {
      id: id
    }).then(() => {
     this.getContacts(); 
    })
  },
  
  
  render: function () {
    return (
      <div className="wrapper"> 
        <ContactList 
          deleteHandler={this.deleteHandler}
          contacts={this.state.contacts}/> 
      </div> 
    );
  }
}); 

module.exports = ShowContacts; 