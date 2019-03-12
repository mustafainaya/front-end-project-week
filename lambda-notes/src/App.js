import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import EditNote from '../src/Components/rightContent/EditNote';
import MyNotes from '../src/Components/rightContent/MyNotes';
import CreateNote from '../src/Components/leftContent/CreateNote';
import ViewNotes from '../src/Components/leftContent/ViewNotes';
import Nav from '../src/Components/leftContent/Nav';
import withRouter from 'react-router-dom';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: [
				{
					_id: null,
					title: '',
					textBody: ''
				}
			],
			error: ''
		};
	}
	componentDidMount() {
		axios
			.get(`https://fe-notes.herokuapp.com/note/get/all`)
			.then((res) => {
				console.log('fetch', res.data);
				this.setState({
					notes: res.data
				});
			})
			.catch((err) => {
				console.log('error', err);
			});
	}
	createNote = (note) => {
		axios
			.post('https://fe-notes.herokuapp.com/note/create', note)
			.then((res) => {
				console.log('responsela', res);
				this.setState((prevState) => ({ notes: [ ...prevState.notes, note ] }));
			})
			.catch((err) => console.log('error', err));
	};
	viewNote = (_id) => {
		axios
			.get(`https://fe-notes.herokuapp.com/note/get/${_id}`)
			.then((res) => {
				console.log('view note', res.data);
				this.setState({ note: res.data.success });
			})
			.catch((err) => {
				console.log('error', err);
			});
	};
	editNote = (_id, note) => {
		console.log('PUT note', note);
		axios
			.put(`https://fe-notes.herokuapp.com/note/edit/${_id}`, note)
			.then((response) => {
				console.log('PUT/UPDATE req response: ', response.data);
				console.log('PUT/UPDATE ID: ', _id);
				this.setState((prevState) => {
					let mappedArray = prevState.notes.map((i) => (i._id === _id ? response.data : i));
					return { notes: mappedArray };
				});
				console.log('note in PUT', note);
				console.log('this', this.state.notes);
			})
			.catch((error) => {
				console.error('PUT/UPDATE req error', error);
				this.setState({
					error: this.state.error
				});
			});
	};

	deleteNote = (_id) => {
		console.log('delete note');
		axios
			.delete(`https://fe-notes.herokuapp.com/note/delete/${_id}`)
			.then((response) => {
				this.setState((deleteState) => {
					let deleteItem = deleteState.notes.filter((i) => (i._id !== _id ? this.state.notes : null));
					return { notes: deleteItem };
				});
				console.log('delete,', response);
				console.log('delete data ', response.data);
			})
			.catch((error) => {
				console.log('DELETE error', error);
			});
	};

	render() {
		return (
			<div className="App">
				{' '}
				<Route path="/" component={Nav} />
				<Route exact path="/" render={(props) => <MyNotes {...props} notes={this.state.notes} />} />
				<Route
					exact
					path="/addNote"
					render={(props) => <CreateNote {...props} addNote={this.createNote} notes={this.state.notes} />}
				/>
				<Route
					exact
					path="/editNote/:_id"
					render={(props) => (
						<EditNote
							{...props}
							notes={this.state.notes}
							error={this.state.error}
							editNote={this.editNote}
						/>
					)}
				/>
				<Route
					exact
					path="/viewNote/:_id"
					render={(props) => (
						<ViewNotes
							{...props}
							indNote={this.viewNote}
							notes={this.state.notes}
							handleDeleteModal={this.deleteNote}
						/>
					)}
				/>
			</div>
		);
	}
}

export default App;
