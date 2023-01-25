import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

const NotFound: FC = () => {
	const navigate = useNavigate();

	const handleClickOnBackBtn = () => navigate('/');

	return (
		<Typography onClick={ handleClickOnBackBtn } sx={ { cursor: 'pointer', display: 'inline-flex' } }>
			Page not found. Click to back homepage
		</Typography>
	);
};

export default NotFound;