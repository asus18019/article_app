import React, { FC, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	Card,
	CardMedia,
	CardContent,
	Typography,
	Stack,
	styled,
	Button
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import { Post as PostType } from '../redux/post/types';
import { convertDate } from '../utils/convertDate';

interface PostProps {
	post: PostType,
	searchValue: string
}

const CardText = styled(Typography)({
	fontSize: 24,
	fontWeight: 400,
	lineHeight: 1.3,
	cursor: 'pointer',
	lineClamp: 2,
	display: '-webkit-box',
	WebkitLineClamp: 2,
	WebkitBoxOrient: 'vertical',
	overflow: 'hidden',
	textOverflow: 'ellipsis'
});

const Post: FC<PostProps> = ({ post, searchValue }) => {
	const navigate = useNavigate();

	const handleClickOnCard = () => {
		navigate(`/article/${ post.id }`);
	};

	const highlightWords = (searchFullValue: string, text: string) => {
		return text.split(' ').map((word, index, array) => {
			for(let i = 0; i < searchFullValue.split(' ').length; i++) {
				if(searchFullValue.split(' ')[i].toLowerCase() === word.toLowerCase()) {
					const isNextValueInTitle = searchFullValue.split(' ')[i + 1] === array[index + 1];
					return (
						<Fragment key={ index }>
							<span style={ { backgroundColor: 'yellow' } }>{ word }{ isNextValueInTitle && ' ' }</span>
							{ !isNextValueInTitle && ' ' }
						</Fragment>
					);
				}
			}
			return <Fragment key={ index }>{ word } </Fragment>;
		});
	};

	const title = highlightWords(searchValue, post.title);

	const description = highlightWords(searchValue, post.summary);

	return (
		<Card variant="outlined" sx={ { width: 370, height: 520, boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)' } }>
			<CardMedia sx={ { height: 215, cursor: 'pointer' } } image={ post.imageUrl } onClick={ handleClickOnCard }/>
			<CardContent sx={ { p: '25px' } }>
				<Stack direction="row" sx={ { color: '#363636', opacity: 0.6, cursor: 'pointer' } }
				       onClick={ handleClickOnCard } alignItems='center'>
					<CalendarTodayIcon sx={ { mr: 1, width: 17 } }/>
					<Typography variant="body1">{ convertDate(post.publishedAt) }</Typography>
				</Stack>
				<CardText sx={{ mt: '25px' }} onClick={ handleClickOnCard }>
					{ title }
				</CardText>
				<CardText sx={{ mt: '20px', fontSize: 16, WebkitLineClamp: 4}} onClick={ handleClickOnCard }>
					{ description }
				</CardText>
				<Button sx={{ px: 0, mt: '18px', cursor: 'pointer' }} endIcon={<EastOutlinedIcon sx={{ color: 'black' }}/>}>
					<Typography variant='h3' color='black' fontWeight={ 700 } fontFamily='Montserrat'>Read more</Typography>
				</Button>

			</CardContent>
		</Card>
	);
};

export default Post;