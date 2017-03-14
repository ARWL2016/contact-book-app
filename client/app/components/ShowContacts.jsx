import React, {Component} from 'React'; 
import axios from 'axios';
import ContactList from 'ContactList'; 

class ShowContacts extends Component {
  constructor(props) {
    super(props);
      this.state = {contacts: [{firstName: '', lastName: ''}] }
  }

  componentWillMount() {
    this.getContacts(); 
  } 

  getContacts() {
    axios.get('/api/contacts')
      .then((list) => {
        this.setState({contacts: list.data});
      })
  }

  deleteHandler(id) {
    axios.post('/api/delete', {
      id: id
    }).then(() => {
     this.getContacts(); 
    })
  }
  
  render() {
    return (
      <div className="wrapper"> 
        <ContactList 
          deleteHandler={this.deleteHandler}
          contacts={this.state.contacts}/> 
      </div> 
    );
  }
}

export default ShowContacts; 