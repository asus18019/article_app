import React, { FC } from 'react';
import { Typography, Stack, Box, styled, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface HeaderProps {
	searchValue: string;
	onChangeSearch: any;
}

const FilterBox = styled(Stack)({
	marginTop: 10,
	padding: 13,
	border: '1px solid #EAEAEA',
	boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05',
	borderRadius: 5
});

const FilterInput = styled(InputBase)({
	fontWeight: 400,
	fontSize: 16,
	width: '100%'
});

const Header: FC<HeaderProps> = ({ searchValue, onChangeSearch }) => {
	return (
		<Box sx={ { p: { xs: 1, lg: 0 } } }>
			<Typography variant="h3" component="h3">Filter by keywords</Typography>
			<FilterBox direction="row" sx={ { width: { xs: '100%', lg: '600px' } } }>
				<SearchIcon sx={ { mr: '20px' } }/>
				<FilterInput
					inputProps={ { sx: { p: 0 } } }
					placeholder="Search..."
					value={ searchValue }
					onChange={ e => onChangeSearch(e.target.value) }
				/>
			</FilterBox>
		</Box>

	);
};

export default Header;