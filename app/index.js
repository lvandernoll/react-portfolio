import React from 'react';
import { HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';

const supportsHistory = 'pushState' in window.history;

ReactDOM.render(
	<HashRouter forceRefresh={!supportsHistory}>
		<App />
	</HashRouter>
, document.getElementById('app'));
