import React from 'react'; 
import Router, {Link} from 'react-router'; 
import axios from 'axios'; 
import ContactForm from 'ContactForm'; 

const ContactListItem = React.createClass({

  deleteContact(e) {
    e.preventDefault();
    const idToDelete = this.props.contact._id; 
    this.props.deleteHandler(idToDelete);
  },

  editContact(e) {
    e.preventDefault();
    const contactToEdit = this.props.contact; 
    return <ContactForm  />
  },
  
  render: function() {
    const {firstName, lastName, _id} = this.props.contact; 

    return (
      <div className="contact-list-box"> 
        <li className="contact-list-item">{firstName} {lastName} 
        <a href="#" onClick={this.deleteContact}>  delete</a> 
        <Link to={{
            pathname: 'manageContactForm', 
            query: {firstName, lastName, _id} }}>Edit</Link></li>

      </div> 
    ) 
  }
  
}); 

export default ContactListItem; 

