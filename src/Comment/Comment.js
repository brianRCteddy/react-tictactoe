import React, { Component } from 'react';

// class Welcome extends Component {
// 	render() {
// 		return <h1>Hello, {this.props.name}</h1>;
// 	}
// }

const Comment = (props) => {
	const formatDate = (date) => {
		return date.toLocaleDateString();
	};
	return (
		<div className="Comment">
			<div className="UserInfo">
				<img className="Avatar" src={props.author.avatarUrl} alt={props.author.name} />
				<div className="UserrInfor-name">{props.author.name}</div>
			</div>
			<div className="Comment-text">{props.text}</div>
			<div className="Comment-date">{formatDate(props.date)}</div>
		</div>
	);
};

export default Comment;
