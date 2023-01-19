import React, { FC } from 'react';
import { Container, Typography } from '@mui/material';

const Home: FC = () => {
	return (
		<Container disableGutters>
			<Typography component="div" style={ { backgroundColor: '#cfe8fc' } }>
				Homepage
			</Typography>
		</Container>
	);
};

export default Home;