const React = require('react');
var Navigation = require('Navigation'); 

var Main = (props) => {
    return (
        <div> 
            <Navigation /> 
            <div> 
                <h1>MAIN JSX</h1>
                {props.children}
            </div> 
        </div> 
    );
};

module.exports = Main; 