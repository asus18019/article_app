import React, { FC, Dispatch, SetStateAction } from 'react';
import { Container, Typography, Input, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface HeaderProps {
	searchValue: string;
	onChangeSearch:  any
}

const Header: FC<HeaderProps> = ({ searchValue, onChangeSearch }) => {
	return (
		<Container disableGutters sx={ { backgroundColor: '#fff' } }>
			<Typography variant="h4" component="h2" style={ { fontSize: 16, fontWeight: 600, fontFamily: 'Montserrat' } }>
				Filter by keywords
			</Typography>
			<Stack direction="row" style={ {
				marginTop: 10,
				width: 600,
				padding: 13,
				border: '1px solid #EAEAEA',
				boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05',
				borderRadius: 5
			} }>
				<SearchIcon style={ { marginRight: '20px' } }/>
				<Input inputProps={ { style: { padding: 0 } } }
				       style={ { fontSize: 16, fontWeight: 400, fontFamily: 'Montserrat', width: '100%', padding: 0 } }
				       disableUnderline={ true }
				       placeholder="The most successful IT companies in 2020"
				       value={ searchValue }
				       onChange={ e => onChangeSearch(e.target.value) }
				/>
			</Stack>
		</Container>

	);
};

export default Header;