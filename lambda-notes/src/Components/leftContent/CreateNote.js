import React, { Component } from 'react';

class CreateNoteInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			note: [
				{
					tags: [],
					_id: null,
					title: '',
					textBody: ''
				}
			]
		};
	}
	changeHandler = (event) => {
		this.setState({
			note: {
				...this.state.note,
				[event.target.name]: event.target.value
			}
		});
	};
	createNote = (event) => {
		event.preventDefault();
		this.setState({
			note: [
				{
					tags: [],
					_id: null,
					title: '',
					textBody: ''
				}
			]
		});
	};
	render() {
		return (
			<div>
				<h2>Create a New Note:</h2>
				<Form onSubmit={this.addNote}>
					<input type="text" name="title" onChange={this.handleSubmit} value={this.state.note.title} />
					<input type="text" name="textBody" onChange={this.handleSubmit} value={this.state.note.textBody} />
					<button type="submit">Save</button>
				</Form>
			</div>
		);
	}
}
