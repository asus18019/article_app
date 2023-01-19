import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const Header: FC = () => {
	return (
		<header>
			<Link to='/'>Home</Link>
			<Link to='/article'>Article</Link>
		</header>
	);
};

export default Header;