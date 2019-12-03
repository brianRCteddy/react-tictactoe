import React, { Component } from 'react';
import './App.css';

function FormattedDate(props) {
	return <h2>It is {props.date.toLocaleTimeString()}</h2>;
}

class Time extends React.Component {
	constructor(props) {
		super(props);
		this.state = { date: new Date() };
	}

	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}

	render() {
		return (
			<div>
				<h1>Hello World!</h1>
				<FormattedDate date={this.state.date} />
				{/* <h2>It is {this.state.date.toLocaleTimeString()}</h2> */}
			</div>
		);
	}
}

function App() {
	return (
		<div>
			<Time />
			<Time />
			<Time />
		</div>
	);
}
export default App;
