const React = require('react'); 
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router'); 

var Main = require('Main'); 
var ManageContactForm = require('ManageContactForm'); 
var ShowContacts = require('./components/ShowContacts'); 

// Load foundation 
$(document).foundation(); 

// Load styles 

require('style!css!sass!applicationStyles')

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            
            <Route path='showContacts' component={ShowContacts} />
            <Route path='manageContactForm' component={ManageContactForm} />
        </Route>
    </Router>, 
    document.getElementById('app')
);


// <IndexRoute component={ShowContacts} />