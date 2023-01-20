import React, { FC, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Article from './pages/Article';
import { fetchPosts, selectPosts } from './redux/post/slice';
import { useAppDispatch } from './redux/store';
import { useSelector } from 'react-redux';
import NotFound from './components/NotFound';

const App: FC = () => {
	const dispatch = useAppDispatch();
	const fetchedData = useSelector(selectPosts);

	useEffect(() => {
		if(fetchedData.posts.length) return;
		dispatch(fetchPosts());
	}, [])

	return (
		<Routes>
			<Route index element={ <Home/> }/>
			<Route path='/article/:articleId' element={ <Article/> }/>
			<Route path='/*' element={ <NotFound/> }/>
		</Routes>
	);
};

export default App;
