import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Article from './pages/Article';
import Header from './components/Header';

const App: FC = () => {
	return (
		<div className="App">
			<Header/>
			<Routes>
				<Route index element={ <Home/> }/>
				<Route path='/article' element={ <Article/> }/>
			</Routes>
		</div>
	);
}

export default App;
