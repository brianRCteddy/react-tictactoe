import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function formatNameUser(user) {
	return `${user.firstname} ${user.lastname}`;
}

const user = {
	firstname: 'Jelly',
	lastname: 'Beans'
};

const element = <h1>Hello, {formatNameUser(user)}</h1>;

ReactDOM.render(element, document.getElementById('root'));
registerServiceWorker();
