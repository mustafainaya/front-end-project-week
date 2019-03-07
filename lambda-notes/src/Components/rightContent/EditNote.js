import React, { Component } from 'react';
import styled from 'styled-components';

class EditNote extends Component {
	constructor(props) {
		super(props);
		this.state = {
			_id: null,
			title: '',
			textBody: ''
		};
	}

	handleChange = (e) => {
		this.setState({
			...this.state,
			[e.target.name]: e.target.value
		});
	};

	editNote = (e, _id) => {
		e.preventDefault();
		let theId = this.props.match.params._id;

		this.props.editNote(theId, {
			_id: this.state._id,
			title: this.state.title,
			textBody: this.state.textBody
		});
	};

	componentDidMount() {
		let title;
		let textBody;
		let _id;

		let theId = this.props.match.params._id;
		const noteBody = this.props.notes.find((note) => {
			return `${note._id}` === theId;
		});
		console.log('notebody', noteBody);
		if (noteBody) {
			title = noteBody.title;
			textBody = noteBody.textBody;
			_id = noteBody._id;

			this.setState({
				title: title,
				textBody: textBody,
				_id: _id
			});
		}
	}

	render() {
		return (
			<EditListContainer>
				<EditListHeader>Edit Note:</EditListHeader>
				<Form onSubmit={this.editNote}>
					<Input
						type="text"
						name="title"
						placeholder={this.state.title}
						onChange={this.handleChange}
						value={this.state.title}
					/>
					<TextArea
						type="textarea"
						name="textBody"
						placeholder={this.state.textBody}
						onChange={this.handleChange}
						value={this.state.textBody}
					/>
					<UpdateButton type="submit">Update</UpdateButton>
				</Form>
			</EditListContainer>
		);
	}
}

export default EditNote;

const EditListContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	margin-left: 10%;
	width: 80%;
	position: absolute;
`;

const EditListHeader = styled.div`
	display: flex;
	margin-top: 5%;
	font-size: 24px;
	font-weight: bold;
	text-decoration: none;
	padding-bottom: 3%;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

const Input = styled.input`
	width: 40%;
	border: 1px solid black;
	border-radius: 5px;
	padding: 1.5% 1%;
	margin: 1% 0;
	font-size: 16px;
`;

const TextArea = styled.textarea`
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

const UpdateButton = styled.button`
	display: flex;
	justify-content: center;
	background-color: mediumturquoise;
	color: white;
	width: 20%;
	padding: 1% 6%;
	margin: 2.5% 0;
	// margin-bottom: 5%;
	font-size: 1rem;
	font-weight: bold;
	&:focus,
	&:hover,
	&:visited,
	&:link,
	&:active {
		text-decoration: none;
	}
`;
