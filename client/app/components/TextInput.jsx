import React, { Component } from 'react'; 

export default class TextInput extends Component {

    render() {
        const {name} = this.props; 
        return (
        <div className="form-input-wrapper"> 
            <label htmlFor={name}>{this.props.label}</label>
            <div className="form-input-field">
                <input type="text"
                    name={name}
                    placeholder={this.props.placeholder}
                    ref={name} 
                    value={this.props.value}
                    onChange={this.props.onChange} />
            </div>
        </div> 
        );
    } 
}
