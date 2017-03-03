const React = require('react'); 
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router'); 

var Main = require('Main'); 
var ManageContactForm = require('ManageContactForm'); 

// Load foundation 
$(document).foundation(); 

// Load styles 
require('style!css!sass!applicationStyles')

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={ManageContactForm} />
        </Route>
    </Router>, 
    document.getElementById('app')
);
