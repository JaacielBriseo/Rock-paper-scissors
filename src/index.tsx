import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { MainApp } from './MainApp';
import { GameProvider } from './context/game/GameProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<GameProvider>
			<MainApp />
		</GameProvider>
	</React.StrictMode>
);
