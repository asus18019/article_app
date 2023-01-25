import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import { store } from './redux/store';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<ThemeProvider theme={ theme }>
			<BrowserRouter>
				<Provider store={ store }>
					<App/>
				</Provider>
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>
);
