import React, { FC, useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import debounce from 'lodash.debounce';
import { useSearchParams } from 'react-router-dom';
import { Container, Typography, Divider, Grid } from '@mui/material';

import Post from '../components/Post';
import Header from '../components/Header';
import { selectPosts } from '../redux/post/slice';
import { Status, Post as PostType } from '../redux/post/types';
import Loading from '../components/Loading';
import { sortPostsByPriority } from '../utils/sortPostsByPriority';

const Home: FC = () => {
	const fetchedData = useSelector(selectPosts);
	const [searchParams, setSearchParams] = useSearchParams();
	const [searchValue, setSearchValue] = useState<string>(searchParams.get('search') || '');
	const [filteredPosts, setFilteredPosts] = useState<PostType[]>(fetchedData.posts);
	const [isFiltering, setIsFiltering] = useState<boolean>(Boolean(searchValue));

	useEffect(() => {
		if(searchValue && fetchedData.status !== Status.LOADING) {
			onChangeSearch(searchValue);
		}
	}, [fetchedData]);

	const onChangeSearch = (value: string) => {
		setSearchValue(value);
		updatePosts(value);
	};

	const updatePosts = useCallback(
		debounce((value: string) => {
			if(value.trim() === '') {
				setFilteredPosts([]);
				setSearchParams();
				setIsFiltering(false);
			} else {
				setIsFiltering(true);
				let search = { search: value };
				setSearchParams(search, { replace: true });

				const sortedPosts = sortPostsByPriority(fetchedData.posts, value);
				setFilteredPosts(sortedPosts);
			}
		}, 500),
		[fetchedData.posts]);

	const postCount = isFiltering ? filteredPosts.length : fetchedData.posts.length;

	return (
		<Container disableGutters sx={ { my: { xs: '20px', lg: '50px' } } }>
			<Header searchValue={ searchValue } onChangeSearch={ onChangeSearch }/>
			<Typography variant="h3" component="h4" sx={ { my: { xs: 3, lg: 5 }, px: { xs: 1, lg: 0 } } }>
				Results: { postCount }
			</Typography>
			<Divider sx={ { mt: 5 } }/>
			<Grid container spacing="42px" sx={ { mt: 0 } } flexDirection="row" justifyContent="center">
				{ fetchedData.status === Status.LOADING ? (
					<Loading/>
				) : isFiltering ? (
					filteredPosts.map(post => {
						return (
							<Grid item key={ post.id }>
								<Post post={ post } searchValue={ searchValue }/>
							</Grid>
						);
					})
				) : (
					fetchedData.posts?.map(post => {
						return (
							<Grid item key={ post.id }>
								<Post post={ post } searchValue={ searchValue }/>
							</Grid>
						);
					})
				)
				}
			</Grid>
		</Container>
	);
};

export default Home;