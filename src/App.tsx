import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Article from './pages/Article';

const App: FC = () => {
	return (
			<Routes>
				<Route index element={ <Home/> }/>
				<Route path='/article/:articleId' element={ <Article/> }/>
			</Routes>
	);
}

export default App;
