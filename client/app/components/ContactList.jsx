import React from 'React'; 
import axios from 'axios';
import ContactListItem from './ContactListItem'; 

const ContactList = (props) => {
  
    const contactItems = props.contacts.map((contact) => {
        return (
          <ContactListItem 
            key={`${contact.lastName}-${contact.firstName}`} 
            deleteHandler={props.deleteHandler} 
            contact={contact} /> 
         );
    });
      
    return (
      <div> 
        <h1>Contact List</h1> 
        {contactItems}
      </div> 
    );
}; 

module.exports = ContactList; 

 