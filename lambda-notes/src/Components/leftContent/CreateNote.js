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
						<Input type="text" name="title" onChange={this.changeHandler} value={this.state.note.title} />
						<TextArea2>
							<input
								type="text"
								name="textBody"
								onChange={this.changeHandler}
								value={this.state.note.textBody}
							/>
						</TextArea2>
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
const TextArea2 = styled.textarea`
	width: 70%;
	height: 350px;
	max-width: 100%;
	border: 1px solid black;
	border-radius: 5px;
	padding: 2% 1%;
	margin: 1% 0;
	font-size: 16px;
	position: static;
`;
const Input = styled.input`
	width: 40%;
	border: 1px solid black;
	border-radius: 5px;
	padding: 1.5% 1%;
	margin: 1% 0;
	font-size: 16px;
`;
