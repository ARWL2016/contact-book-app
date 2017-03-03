const React = require('react');
var ContactForm = require('ContactForm'); 
var apiCaller = require('../utils/apiCaller'); 

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

    saveContact: function (event) {
        event.preventDefault(); 
        apiCaller.save(this.state.contact); 
        console.log(this.state.contact); 

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