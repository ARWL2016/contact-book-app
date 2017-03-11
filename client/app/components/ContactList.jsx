const React = require('React'); 
const axios = require('axios');
import ContactListItem from './ContactListItem'; 

const ContactList = (props) => {

    const contactItems = props.contacts.map((contact) => {
        return (
          <ContactListItem 
            deleteHandler={props.deleteHandler}
            key={contact._id} 
            contact={contact} /> 
         );
    });
      
    return (
      <div className=" "> 
        <h1>Contact List</h1> 
        {contactItems}
      </div> 
    );
}; 

module.exports = ContactList; 

 