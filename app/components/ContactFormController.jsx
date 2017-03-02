const React = require('react');
var ContactForm = require('ContactForm'); 

var ContactFormController = React.createClass({

    render: function () {
        return (
        <div> 
            <h1>Controller</h1>
                <ContactForm /> 

        </div> 
        );    
    }
    
});

module.exports = ContactFormController; 