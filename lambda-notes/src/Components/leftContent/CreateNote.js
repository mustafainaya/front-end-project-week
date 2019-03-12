import React, { Component } from 'react';
import styled from 'styled-components';

class CreateNote extends Component {
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
	addNote = (event) => {
		event.preventDefault();
		this.props.addNote(this.state.note);
		this.setState({
			note: [
				{
					_id: null,
					tags: [],
					title: '',
					textBody: ''
				}
			]
		});
	};
	render() {
		return (
			<div>
				<InputContainer>
					<h2>Create a New Note:</h2>
					<form onSubmit={this.addNote}>
						<input type="text" name="title" onChange={this.changeHandler} value={this.state.note.title} />
						<input
							type="text"
							name="textBody"
							onChange={this.changeHandler}
							value={this.state.note.textBody}
						/>
						<button type="submit">Save</button>
					</form>
				</InputContainer>
			</div>
		);
	}
}

export default CreateNote;

const InputContainer = styled.section`
	width: 100%;
	margin-left: 30%;
	width: 100%;
`;
