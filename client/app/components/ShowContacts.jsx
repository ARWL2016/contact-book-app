const React = require('React'); 
const axios = require('axios');
const ContactList = require('ContactList'); 

var ShowContacts = React.createClass({
  getInitialState: function() {
    return {
      contacts: [{firstName: '', lastName: ''}]
    }; 
  }, 

  componentWillMount: function() {
    axios.get('/api/contacts')
      .then((list) => {
        this.setState({contacts: list.data});
        // console.log(list);  
      })
  }, 
  
  render: function () {
    return (
      <div className="wrapper"> 
        <ContactList contacts={this.state.contacts}/> 
      </div> 
    );
  }
}); 

module.exports = ShowContacts; 