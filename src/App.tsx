import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import Home from './pages/Home';
import Article from './pages/Article';
import Header from './components/Header';

const App: FC = () => {
	return (
		<Box sx={{ p: 6 }}>
			<Header/>
			<Routes>
				<Route index element={ <Home/> }/>
				<Route path='/article' element={ <Article/> }/>
			</Routes>
		</Box>
	);
}

export default App;
