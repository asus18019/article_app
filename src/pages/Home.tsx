import React, { FC } from 'react';
import { Container, Typography, Divider, Grid } from '@mui/material';

import Post from '../components/Post';

const Home: FC = () => {
	return (
		<Container disableGutters>
			<Typography variant="h4" component="h2" style={ { fontSize: 16, fontWeight: 600, fontFamily: 'Montserrat', marginTop: 40 } }>
				Results: 6
			</Typography>
			<Divider style={{ marginTop: 5 }} />
			<Grid container spacing={6} style={{ marginTop: 0 }}>
				<Grid item xs={4}>
					<Post/>
				</Grid>
				<Grid item xs={4}>
					<Post/>
				</Grid>
				<Grid item xs={4}>
					<Post/>
				</Grid>
				<Grid item xs={4}>
					<Post/>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Home;