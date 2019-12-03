import React, { Component } from 'react';

const Avatar = (props) => {
	return <img className="Avatar" src={props.user.avatarUrl} alt={props.user.alt} />;
};

const UserInfo = (props) => {
	return (
		<div className="UserInfo">
			<Avatar user={props.user} />
			<div className="UserInfo-name">{props.user.name}</div>
		</div>
	);
};

const formatDate = (date) => {
	return date.toLocaleDateString();
};

const Comment = (props) => {
	return (
		<div className="Comment">
			<UserInfo user={props.author} />
			<div className="Comment-text">{props.text}</div>
			<div className="Comment-date">{formatDate(props.date)}</div>
		</div>
	);
};

export default Comment;
