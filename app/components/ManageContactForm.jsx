const React = require('react');
var ContactForm = require('ContactForm'); 

var ManageContactForm = React.createClass({

    render: function () {
        return (
        <div> 
            <h1>Controller</h1>
                <ContactForm /> 

        </div> 
        );    
    }
    
});

module.exports = ManageContactForm; 