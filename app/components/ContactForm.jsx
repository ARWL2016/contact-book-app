const React = require('react');

var TextInput = require('TextInput'); 

var ContactForm = React.createClass({
    render: function () {
        return (
            <div> 
                <h1>Contact Form</h1>
                <TextInput />
            </div> 
        );
    } 
}); 

module.exports = ContactForm; 