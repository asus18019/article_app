import React, { FC } from 'react';
import { CircularProgress, Grid } from '@mui/material';

const Loading: FC = () => {
	return (
		<Grid item xs={ 12 } sx={ { display: 'flex', justifyContent: 'center' } }>
			<CircularProgress/>
		</Grid>
	);
};

export default Loading;