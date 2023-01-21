import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Container, Typography, Divider, Grid } from '@mui/material';

import Post from '../components/Post';
import Header from '../components/Header';
import { selectPosts } from '../redux/post/slice';
import { Status, Post as PostType } from '../redux/post/types';
import Loading from '../components/Loading';
import { isTextIncludeWords } from '../utils/isTextIncludeWords';

const Home: FC = () => {
	const fetchedData = useSelector(selectPosts);
	const [searchValue, setSearchValue] = useState<string>('');
	const [filteredPosts, setFilteredPosts] = useState<PostType[]>(fetchedData.posts);

	const onChangeSearch = (value: string) => {
		setSearchValue(value);
		if(value.trim() === '') {
			setFilteredPosts([]);
		} else {
			let lastTitleIndex = 0;
			const sortedPosts: PostType[] = [];
			for(let i = 0; i < fetchedData.posts.length; i++) {
				if(isTextIncludeWords(fetchedData.posts[i].title, value)) {
					sortedPosts.splice(lastTitleIndex, 0, fetchedData.posts[i]);
					lastTitleIndex++;
					continue;
				}
				if(isTextIncludeWords(fetchedData.posts[i].summary, value)) {
					sortedPosts.push(fetchedData.posts[i]);
				}
			}
			setFilteredPosts(sortedPosts);
		}
	};

	const postCount = !searchValue.length ? fetchedData.posts.length : filteredPosts.length;

	return (
		<Box sx={ { p: 6 } }>
			<Header searchValue={ searchValue } onChangeSearch={ onChangeSearch }/>
			<Container disableGutters>
				<Typography variant="h4" component="h2"
				            style={ { fontSize: 16, fontWeight: 600, fontFamily: 'Montserrat', marginTop: 40 } }>
					Results: { postCount }
				</Typography>
				<Divider style={ { marginTop: 5 } }/>
				<Grid container spacing={ 6 } style={ { marginTop: 0 } }>
					{ fetchedData.status === Status.LOADING ? (
						<Loading/>
					) : searchValue.length ? (
						filteredPosts.map(post => {
							return (
								<Grid item xs={ 4 } key={ post.id }>
									<Post post={ post } searchValue={ searchValue }/>
								</Grid>
							);
						})
					) : (
						fetchedData.posts?.map(post => {
							return (
								<Grid item xs={ 4 } key={ post.id }>
									<Post post={ post } searchValue={ searchValue }/>
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