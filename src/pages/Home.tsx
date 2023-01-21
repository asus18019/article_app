import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Container, Typography, Divider, Grid } from '@mui/material';

import Post from '../components/Post';
import Header from '../components/Header';
import { selectPosts } from '../redux/post/slice';
import { Status, Post as PostType } from '../redux/post/types';
import Loading from '../components/Loading';

const Home: FC = () => {
	const fetchedData = useSelector(selectPosts);
	const [searchValue, setSearchValue] = useState<string>('');
	const [filteredPosts, setFilteredPosts] = useState<PostType[]>(fetchedData.posts);
	const isSearching: boolean = Boolean(searchValue);

	const onChangeSearch = (value: string) => {
		setSearchValue(value);
	};

	const result = fetchedData.posts?.map((post: PostType) => {
		return <div>Loading</div>
	})

	return (
		<Box sx={ { p: 6 } }>
			<Header searchValue={searchValue} onChangeSearch={onChangeSearch} />
			<Container disableGutters>
				<Typography variant="h4" component="h2" style={ { fontSize: 16, fontWeight: 600, fontFamily: 'Montserrat', marginTop: 40 } }>
					Results: { fetchedData.posts.length }
				</Typography>
				<Divider style={ { marginTop: 5 } }/>
				<Grid container spacing={ 6 } style={ { marginTop: 0 } }>
					{ fetchedData.status === Status.LOADING ? (
						<Loading />
					)  : (
						fetchedData.posts?.map(post => {
							return (
								<Grid item xs={ 4 } key={ post.id }>
									<Post post={ post } searchValue={searchValue}/>
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