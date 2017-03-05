const React = require('react');
const {Link, IndexLink} = require('react-router'); 

var Navigation = () => {
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">Contact Book</li>
                    <li>
                        <Link to="/showContacts" activeClassName="active-link">View Contacts</Link>
                    </li>
                    <li>
                        <Link to="/manageContactForm" activeClassName="active-link">Add Contact</Link>
                    </li>
                </ul>
            </div>

            <div className="top-bar-right">
                <ul className="menu">
                    <li className="menu-text">
                        Created by <a href="https://github.com/ARWL2016/contact-book-app" target="_blank">Alistair Willis</a>
                    </li>
                </ul>
            </div>
        </div>  
    );
};

module.exports = Navigation; 