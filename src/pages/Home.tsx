import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Box, Container, Typography, Divider, Grid } from '@mui/material';

import Post from '../components/Post';
import Header from '../components/Header';
import { selectPosts } from '../redux/post/slice';
import { Status } from '../redux/post/types';
import Loading from '../components/Loading';

const Home: FC = () => {
	const fetchedData = useSelector(selectPosts);

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
						<Loading />
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