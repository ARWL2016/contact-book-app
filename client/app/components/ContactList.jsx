const React = require('React'); 
const axios = require('axios');

var ContactList = React.createClass({

  propTypes: {
        contacts: React.PropTypes.array.isRequired
    },

  render: function () {
    var createContactRow = function(contact) {
      return (
        <p>{contact.firstName} {contact.lastName}</p> 
      );
    }; 
    
    return (
      <div> 
        <h1>Contact List</h1> 
        <div>{this.props.contacts.map(createContactRow, this)}</div>
        
      </div> 
    );
  }
}); 

module.exports = ContactList; 

 