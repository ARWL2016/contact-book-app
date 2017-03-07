import React from 'react'; 

const ContactListItem = (props) => {
  const { contact } = props; 
  return (
    <div className="contact-list-box"> 
      <li className="contact-list-item">{contact.firstName} {contact.lastName} </li>
    </div> 
  ) 
}; 

export default ContactListItem; 