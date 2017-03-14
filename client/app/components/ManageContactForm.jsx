import React from 'react';
import ContactForm from 'ContactForm'; 
import axios from 'axios'; 
import toastr from 'toastr'; 
import { browserHistory } from 'react-router';

var ManageContactForm = React.createClass({
    
    getInitialState: function() {
        return {
            contact: { firstName: '', lastName: '', _id: ''}
        }; 
    },

    setContactState: function(event) {
        const {contact} = this.state; 
        const {value} = event.target; 
        const field = event.target.name; 
        contact[field] = value; 
        this.setState({contact}); 
    },

    validateForm: function() {
        var formIsValid = true; 
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
    },

    saveContact: function (event) {
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
    }, 

    componentDidMount: function() {
        const {query} = this.props.location; 
        if (query) {
            const { firstName, lastName, _id} = query; 
            this.setState({contact: {firstName, lastName, _id}});  
        }
    },

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

// ManageContactForm.contextTypes = {
//   router: React.PropTypes.object.isRequired
// };

module.exports = ManageContactForm; 