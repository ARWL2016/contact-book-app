const React = require('react');
var ContactForm = require('ContactForm'); 

var ManageContactForm = React.createClass({

    getInitialState: function() {
        return {
            contact: { firstName: ''}
        }; 
    },

    setContactState: function(event) {
        var value = event.target.value; 
        var field = event.target.name; 
        console.log(`The value is ${value} and the field was ${field}`); 
        this.state.contact[field] = value; 
        this.setState({contact: this.state.contact}); 
        console.log('state.contact.firstname: ' + this.state.contact.firstName);
    },

    saveContact: function () {
         console.log('saveContact function'); 

    }, 
// RENDER **********************************************
    render: function () {
        return (
        <div> 
            <h1>Controller</h1>
                <ContactForm 
                    contact={this.state.contact}
                    onChange={this.setContactState}
                    onSave={this.saveContact}
                /> 

        </div> 
        );    
    }
    
});

module.exports = ManageContactForm; 