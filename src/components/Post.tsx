import React, { FC, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardMedia, CardContent, CardActions, Typography, Stack } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import { Post as PostType } from '../redux/post/types';
import { convertDate } from '../utils/convertDate';

interface PostProps {
	post: PostType,
	searchValue: string
}

const Post: FC<PostProps> = ({ post, searchValue }) => {
	const navigate = useNavigate();

	const handleClickOnCard = () => {
		navigate(`/article/${ post.id }`);
	};

	const highlightWords = (searchFullValue: string, text: string) => {
		return text.split(' ').map((word, index, array) => {
			for(let i = 0; i < searchFullValue.split(' ').length; i++) {
				if(searchFullValue.split(' ')[i] === word) {
					const isNextValueInTitle = searchFullValue.split(' ')[i + 1] === array[index + 1];
					return (
						<>
							<span style={ { backgroundColor: 'yellow' } }>{ word }{ isNextValueInTitle && ' ' }</span>
							{ !isNextValueInTitle && ' ' }
						</>
					);
				}
			}
			return <Fragment key={ index }>{ word } </Fragment>;
		});
	};

	const title = highlightWords(searchValue, post.title);

	const description = highlightWords(searchValue, post.summary);

	return (
		<Card variant="outlined" style={ { width: 370, height: 530, boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)' } }>
			<CardMedia style={ { height: 215, cursor: 'pointer' } } image={ post.imageUrl }
			           onClick={ handleClickOnCard }/>
			<CardContent style={ { padding: 25 } }>
				<Stack direction="row" style={ { color: '#363636', opacity: 0.6, cursor: 'pointer' } }
				       onClick={ handleClickOnCard }>
					<CalendarTodayIcon style={ { marginRight: 10, width: 17 } }/>
					<Typography variant="h6"
					            style={ {
						            fontSize: 14,
						            fontFamily: 'Montserrat'
					            } }>{ convertDate(post.publishedAt) }</Typography>
				</Stack>
				<Typography
					component="h2"
					style={ {
						marginTop: 20,
						fontFamily: 'Montserrat',
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
					} }
					onClick={ handleClickOnCard }
				>
					{ title }
				</Typography>
				<Typography
					component="p"
					style={ {
						marginTop: 20,
						fontFamily: 'Montserrat',
						fontSize: 16,
						cursor: 'pointer',
						display: '-webkit-box',
						WebkitLineClamp: 4,
						WebkitBoxOrient: 'vertical',
						overflow: 'hidden',
						textOverflow: 'ellipsis'
					} }
					onClick={ handleClickOnCard }
				>
					{ description }
				</Typography>
				<CardActions style={ { padding: 0 } }>
					<Stack direction="row" style={ { marginTop: 18, cursor: 'pointer' } } onClick={ handleClickOnCard }>
						<Typography component="p" style={ {
							marginRight: 6,
							fontFamily: 'Montserrat',
							fontSize: 16,
							fontWeight: 700
						} }>
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