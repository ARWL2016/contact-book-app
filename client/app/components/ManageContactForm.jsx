const React = require('react');
// const Router = require('react-router'); 
var ContactForm = require('ContactForm'); 
const axios = require('axios'); 
const toastr = require('toastr'); 
import { browserHistory } from 'react-router';


var ManageContactForm = React.createClass({
    
    getInitialState: function() {
        return {
            contact: { firstName: '', lastName: ''}
        }; 
    },

    setContactState: function(event) {
        var value = event.target.value; 
        var field = event.target.name; 
        // console.log(`The value is ${value} and the field was ${field}`); 
        this.state.contact[field] = value; 
        this.setState({contact: this.state.contact}); 
        // console.log('state.contact.' + field + ' is ' + this.state.contact[field]);
    },

    resetState: function() {
        console.log('reset');
        this.setState({contact: {firstName: '', lastName: ''}});
    },

    saveContact: function (event) {
        event.preventDefault(); 
        
        axios.post('/api/contacts', {
            firstName: this.state.contact.firstName, 
            lastName: this.state.contact.lastName
        })
            .then(function (response) {
                toastr.success('Your contact has been saved.')
                console.log('Response to Axios call:'); 
                console.log(response); 
                  
            });
        
        console.log('Component State: '); 
        console.log(this.state.contact); 
        this.resetState();
        this.context.router.push('showContacts');

    }, 
// RENDER **********************************************
    render: function () {
        return (
        <div> 
                <ContactForm 
                    contact={this.state.contact}
                    onChange={this.setContactState}
                    onSave={this.saveContact}
                /> 

        </div> 
        );    
    }
    
});

ManageContactForm.contextTypes = {
  router: React.PropTypes.object.isRequired
};

module.exports = ManageContactForm; 