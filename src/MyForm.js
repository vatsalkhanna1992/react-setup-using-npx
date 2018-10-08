import React from 'react';

export default class MyForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {first_name: '', last_name: ''}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

  handleSubmit(event) {
    var msg = "Form submitted successfully. Name: " + this.state.first_name + " " + this.state.last_name; 
    alert(msg);
    event.preventDefault();
  }

  handleChange(event) {
  	event.target.name==='first_name' ? this.setState({first_name: event.target.value}) : this.setState({last_name: event.target.value});
  }
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
		    <label>First Name<input type="text" value={this.state.first_name} name="first_name" onChange={this.handleChange}/> <br/></label>
		    <label>Last Name<input type="text" value={this.state.last_name} name="last_name" onChange={this.handleChange}/> <br/></label>
		    <input type="submit" value="Submit" />
		  </form>
		);
	}
}