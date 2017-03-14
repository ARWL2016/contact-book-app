import React from 'react'; 
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router'; 

import Main from 'Main'; 
import ManageContactForm from 'ManageContactForm'; 
import ShowContacts from 'ShowContacts'; 

// Load foundation 
$(document).foundation(); 

// Load styles 

require('style!css!sass!applicationStyles')

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={Main}>   
            <Route path='showContacts' component={ShowContacts} />  
            <Route path='manageContactForm' component={ManageContactForm}>
            </Route> 
        </Route>
    </Router>, 
    document.getElementById('app')
);

