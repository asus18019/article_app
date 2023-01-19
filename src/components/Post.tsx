import React, { FC } from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Stack } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';

const Post: FC = () => {
	return (
		<Card variant="outlined" style={ { width: 370, height: 530, boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)' } }>
			<CardMedia style={ { height: 215, cursor: 'pointer' } } image="https://spaceflightnow.com/wp-content/uploads/2023/01/20230118f9gps3sv06launch.jpg"/>
			<CardContent style={ { padding: 25 } }>
				<Stack direction='row' style={ { color: '#363636', opacity: 0.6}}>
					<CalendarTodayIcon style={ { marginRight: 10, width: 17 } }/>
					<Typography variant='h6' style={{ fontSize: 14, fontFamily: 'Montserrat' }}>June 29th, 2021</Typography>
				</Stack>
				<Typography component="h2" style={{ marginTop: 24, fontFamily: 'Montserrat', fontSize: 24, fontWeight: 400, lineHeight: 1.3 }}>
					The 2020 World's Most Valuable Brands
				</Typography>
				<Typography component="p" style={{ marginTop: 20, fontFamily: 'Montserrat', fontSize: 16}}>
					Non sed molestie tortor massa vitae in mattis. Eget vel consequat hendrerit commodo libero aliquam. Urna arcu nunc tortor vitae pharetra...
				</Typography>
				<CardActions style={{ padding: 0 }}>
					<Stack direction='row' style={{ marginTop: 18, cursor: 'pointer' }}>
						<Typography component="p" style={{ marginRight: 6, fontFamily: 'Montserrat', fontSize: 16, fontWeight: 700}}>
							Read more
						</Typography>
						<EastOutlinedIcon/>
					</Stack>
				</CardActions>
			</CardContent>
		</Card>
	);
};

export default Post;