import React from 'react'; 
import axios from 'axios'; 

const ContactListItem = React.createClass({

  deleteContact(e) {
    e.preventDefault();
    const idToDelete = this.props.contact._id; 
    this.props.deleteHandler(idToDelete); 
    
  },
  
  render: function() {
    return (
      <div className="contact-list-box"> 
        <li className="contact-list-item">{this.props.contact.firstName} {this.props.contact.lastName} 
        <a href="#" onClick={this.deleteContact}>  delete</a> <a href="">  edit</a></li>
      </div> 
    ) 
  }
  
}); 

export default ContactListItem; 