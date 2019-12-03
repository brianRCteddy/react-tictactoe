import React, { Component } from 'react';
import './App.css';
import Comment from './Comment/Comment';

class App extends Component {
	render() {
		const comment = {
			date: new Date(),
			text: 'I hope you enjoy learning React',
			author: {
				name: 'Brian RC Teddy',
				avatarUrl: 'https://placekitten.com/g/64/64',
				alt: 'image to be followed'
			}
		};
		return (
			<div className="App">
				<Comment date={comment.date} text={comment.text} author={comment.author} />
			</div>
		);
	}
}

export default App;
