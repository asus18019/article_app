import { createTheme } from '@mui/material';

export const theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1200,
			xl: 1350,
		},
	},
	typography: {
		h3: {
			fontFamily: 'Montserrat',
			fontSize: 16,
			fontWeight: 600
		},
		body1: {
			fontFamily: 'Montserrat',
			fontSize: 14,
			fontWeight: 400
		}
	}
});