import React, { FC, useState } from 'react';
import { Container, Typography, Divider, Grid } from '@mui/material';

import Post from '../components/Post';
import { data, Post as PostType } from '../data';

const Home: FC = () => {
	const [posts, setPosts] = useState<PostType[]>(data);
	return (
		<Container disableGutters>
			<Typography variant="h4" component="h2" style={ { fontSize: 16, fontWeight: 600, fontFamily: 'Montserrat', marginTop: 40 } }>
				Results: { posts.length }
			</Typography>
			<Divider style={{ marginTop: 5 }} />
			<Grid container spacing={6} style={{ marginTop: 0 }}>
				{
					posts.map(post => {
						return (
							<Grid item xs={4} key={ post.id }>
								<Post post={ post }/>
							</Grid>
						);
					})
				}
			</Grid>
		</Container>
	);
};

export default Home;