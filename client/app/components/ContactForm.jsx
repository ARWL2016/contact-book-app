import React, { Component } from 'react';
import TextInput from 'TextInput'; 

export default class ContactForm extends Component {
    render () {
        return (
            <form> 
                <h1>Contact Form</h1>
                <TextInput 
                    name="firstName"
                    label="First name"
                    placeholder="Enter your first name"
                    value={this.props.contact.firstName}
                    onChange={this.props.onChange} />

                <TextInput 
                    name="lastName"
                    label="Last name"
                    placeholder="Enter your last name"
                    value={this.props.contact.lastName}
                    onChange={this.props.onChange} />

                    <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
            </form> 
        );
    } 
}
