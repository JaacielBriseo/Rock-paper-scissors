import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainApp } from './MainApp';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<MainApp />
		</Provider>
	</React.StrictMode>
);
