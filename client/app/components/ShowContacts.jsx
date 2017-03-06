const React = require('React'); 
const axios = require('axios');
const ContactList = require('ContactList'); 

var ShowContacts = React.createClass({
  componentWillMount: function() {
    // add a read to the API 
    // use axios to make API read call 
    // update the component state 
    // pass the array of object to contact list as a prop
  }, 
  
  render: function () {
    return (
      <div> 
        <h1>Contact Page</h1> 
        <ContactList /> 
      </div> 
    );
  }
}); 

module.exports = ShowContacts; 