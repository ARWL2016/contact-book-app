import React from 'react'; 
import axios from 'axios'; 
import Router from 'react-router'; 
import {Link} from 'react-router'; 
var ContactForm = require('ContactForm'); 

const ContactListItem = React.createClass({

  deleteContact(e) {
    e.preventDefault();
    const idToDelete = this.props.contact._id; 
    this.props.deleteHandler(idToDelete);
  },

  editContact(e) {
    e.preventDefault();
    const contactToEdit = this.props.contact; 
    // this.context.router.push('ManageContactForm');
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
          query: {firstName, lastName, _id}
        }} >  edit</Link></li>
          <li className="contact-list-item">{_id}</li>
      </div> 
    ) 
  }
  
}); 

// ContactListItem.contextTypes = {
//   router: React.PropTypes.object.isRequired
// };

export default ContactListItem; 


// http://stackoverflow.com/questions/30115324/pass-props-in-link-react-router