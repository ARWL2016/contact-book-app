const React = require('react');

var TextInput = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired,
        onChange: React.PropTypes.func.isRequired,
        placeholder: React.PropTypes.string,
        value: React.PropTypes.string,
    },
    render: function () {
        return (
        <div className="form-input-wrapper"> 
            <label htmlFor={this.props.name}>{this.props.label}</label>
            <div className="form-input-field">
                <input type="text"
                    name={this.props.name}
                    placeholder={this.props.placeholder}
                    ref={this.props.name} 
                    value={this.props.value}
                    onChange={this.props.onChange} />
            </div>
        </div> 
        );
    } 
}); 

module.exports = TextInput; 