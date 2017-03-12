const React = require('react');
var ContactForm = require('ContactForm'); 
const axios = require('axios'); 
const toastr = require('toastr'); 
import { browserHistory } from 'react-router';


var ManageContactForm = React.createClass({
    
    getInitialState: function() {
        return {
            contact: { firstName: '', lastName: '', _id: ''}
        }; 
    },

    setContactState: function(event) {
        var value = event.target.value; 
        var field = event.target.name; 
        this.state.contact[field] = value; 
        this.setState({contact: this.state.contact}); 
    },

    validateForm: function() {
        var formIsValid = true; 

        if (this.state.contact.firstName.length < 2) {
            formIsValid = false; 
            toastr.warning('First name is too short'); 
        }

        if (this.state.contact.lastName.length < 2) {
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
            axios.post('/api/contacts', {
            firstName: this.state.contact.firstName, 
            lastName: this.state.contact.lastName
        })
            .then((response) => {
                console.log(response); 
                toastr.success(`${response.data.firstName} ${response.data.lastName} has been saved.`);
                this.setState({contact: {firstName: '', lastName: ''}});
                // this.context.router.push('showContacts');
            });
        } else {
            // make an update
        }
        
        
    }, 

    componentDidMount: function() {
        if (this.props.location.query) {
            console.log(this.props.location.query);
            let { firstName, lastName, _id} = this.props.location.query; 
            
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