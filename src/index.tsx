import React from 'react';
import ReactDOM from 'react-dom/client';
import { GameProvider } from './context';
import { MainApp } from './MainApp';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<GameProvider>
			<MainApp />
		</GameProvider>
	</React.StrictMode>
);
