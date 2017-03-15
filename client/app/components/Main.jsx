import React from 'React'; 
import Navigation from 'Navigation';

const Main = (props) => {
    return (
        <div> 
            <Navigation /> 
            <div> 
                {props.children}
            </div> 
        </div> 
    );
};

module.exports = Main; 