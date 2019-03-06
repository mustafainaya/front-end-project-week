import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import MyNotes from '../src/Components/rightContent/MyNotes';
import CreateNote from '../src/Components/leftContent/CreateNote';
import Nav from '../src/Components/leftContent/Nav';
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
				this.setState({ notes: res.data });
			})
			.catch((err) => console.log('error', err));
	};
	render() {
		return (
			<div className="App">
				{' '}
				<Route path="/" Component={Nav} />
				<Route exact path="/" render={(props) => <MyNotes {...props} notes={this.state.notes} />} />
			</div>
		);
	}
}

export default App;
