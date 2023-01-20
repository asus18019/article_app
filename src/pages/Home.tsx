import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Box, Container, Typography, Divider, Grid, CircularProgress } from '@mui/material';

import Post from '../components/Post';
import Header from '../components/Header';
import { fetchPosts, selectPosts } from '../redux/post/slice';
import { Status } from '../redux/post/types';
import { useAppDispatch } from '../redux/store';

const Home: FC = () => {
	const dispatch = useAppDispatch();
	const fetchedData = useSelector(selectPosts);

	useEffect(() => {
		dispatch(fetchPosts());
	}, []);

	return (
		<Box sx={ { p: 6 } }>
			<Header/>
			<Container disableGutters>
				<Typography variant="h4" component="h2" style={ { fontSize: 16, fontWeight: 600, fontFamily: 'Montserrat', marginTop: 40 } }>
					Results: { fetchedData.posts.length }
				</Typography>
				<Divider style={ { marginTop: 5 } }/>
				<Grid container spacing={ 6 } style={ { marginTop: 0 } }>
					{ fetchedData.status === Status.LOADING ? (
						<Grid item xs={ 12 } sx={ { display: 'flex', justifyContent: 'center' } }>
							<CircularProgress/>
						</Grid>
					) : (
						fetchedData.posts?.map(post => {
							return (
								<Grid item xs={ 4 } key={ post.id }>
									<Post post={ post }/>
								</Grid>
							);
						})
					)
					}
				</Grid>
			</Container>
		</Box>
	);
};

export default Home;