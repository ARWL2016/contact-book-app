import React, { Component } from 'react';
import ContactForm from 'ContactForm'; 
import axios from 'axios'; 
import toastr from 'toastr'; 
import { browserHistory } from 'react-router';

export default class ManageContactForm extends Component {
    constructor(props) {
        super(props);

        this.state = { contact: { firstName: '', lastName: '', _id: ''} }

        this.setContactState = this.setContactState.bind(this); 
        this.saveContact = this.saveContact.bind(this); 
    }
    
    setContactState(event) {
        const {contact} = this.state; 
        const {value} = event.target; 
        const field = event.target.name; 
        contact[field] = value; 
        this.setState({contact}); 
    }

    validateForm() {
        let formIsValid = true; 
        const {firstName, lastName} = this.state.contact; 

        if (firstName.length < 2) {
            formIsValid = false; 
            toastr.warning('First name is too short'); 
        }

        if (lastName.length < 2) {
            formIsValid = false; 
            toastr.warning('Last name is too short'); 
        }
        return formIsValid; 
    }

    saveContact(event) {
        event.preventDefault(); 

        if (!this.validateForm()) {
            return; 
        }
        
        if (!this.state.contact._id) {
            const {firstName, lastName} = this.state.contact; 
            axios.post('/api/contacts', {firstName, lastName})
            .then((response) => {
                toastr.success(`${response.data.firstName} ${response.data.lastName} has been saved.`);
                this.setState({contact: {firstName: '', lastName: ''}});     
            });
        } else { 
            axios.post('/api/edit', this.state.contact)
                .then((response) => {
                toastr.success(`${response.data.firstName} ${response.data.lastName} has been saved.`);
                this.setState({contact: {firstName: '', lastName: '', _id: ''}}); 
            });
        }  
    }

    componentDidMount() {
        const {query} = this.props.location; 
        if (query) {
            const { firstName, lastName, _id} = query; 
            this.setState({contact: {firstName, lastName, _id}});  
        }
    }

    render() {
        return (
            <div> 
                <ContactForm 
                    contact={this.state.contact}
                    onChange={this.setContactState}
                    onSave={this.saveContact} /> 
            </div> 
        );    
    }
}

 