import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound: FC = () => {
	const navigate = useNavigate();

	const handleClickOnBackBtn = () => navigate('/');

	return (
		<p onClick={ handleClickOnBackBtn } style={ { cursor: 'pointer', display: 'inline-flex' } }>Page not found. Click to back homepage</p>
	);
};

export default NotFound;