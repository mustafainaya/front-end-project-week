import React, { Component } from 'react';
import axios from 'axios';
// import { Route } from 'react-router-dom';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: []
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
	render() {
		return <div className="App">{/* <Route exact path="/" render={props} /> */}</div>;
	}
}

export default App;
