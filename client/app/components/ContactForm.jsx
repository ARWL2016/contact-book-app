const React = require('react');

var TextInput = require('TextInput'); 

var ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired, 
        onChange: React.PropTypes.func.isRequired, 
        onSave: React.PropTypes.func.isRequired
    }, 

    render: function () {
        return (
            <form> 
                <h1>Contact Form</h1>
                <TextInput 
                    name="firstName"
                    label="First name"
                    placeholder="Enter your first name"
                    value={this.props.contact.firstName}
                    onChange={this.props.onChange}
                    />

                <TextInput 
                    name="lastName"
                    label="Last name"
                    placeholder="Enter your last name"
                    value={this.props.contact.lastName}
                    onChange={this.props.onChange}
                    />

                    <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
            </form> 
        );
    } 
}); 

module.exports = ContactForm; 