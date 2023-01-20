import React, { FC } from 'react';
import { Container, Stack, CardMedia, Typography } from '@mui/material';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import { useNavigate, useParams } from 'react-router-dom';
import { selectPostById, selectPosts } from '../redux/post/slice';
import { useSelector } from 'react-redux';
import { Post, Status } from '../redux/post/types';
import Loading from '../components/Loading';
import NotFound from '../components/NotFound';

const Article: FC = () => {
	const navigate = useNavigate();
	let { articleId } = useParams();
	const { status } = useSelector(selectPosts);
	const article: Post = useSelector(selectPostById(Number(articleId)));

	const handleClickOnBackBtn = () => navigate('/');

	return (
		(status !== Status.LOADING && !article) ? (
			<NotFound/>
		) : (
			<div style={ { position: 'relative', paddingTop: 150 } }>
				{ status === Status.SUCCESS && article ? (
					<>
						<CardMedia
							style={ {
								height: 235,
								position: 'absolute',
								top: 0,
								left: '50%',
								transform: 'translateX(-50%)',
								zIndex: -5
							} }
							component="img" image={ article.imageUrl }
						/>
						<Container style={ {
							backgroundColor: '#fff',
							padding: '35px 75px 50px 75px',
							border: '1px solid #EAEAEA',
							boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
							borderRadius: 5
						} }
						>
							<Typography component="h1" style={ {
								textAlign: 'center',
								fontFamily: 'Montserrat',
								fontWeight: 400,
								fontSize: 24,
								color: '#363636'
							} }>{ article.title }</Typography>
							<Typography component="p" style={ {
								marginTop: 50,
								fontFamily: 'Montserrat',
								fontWeight: 400,
								fontSize: 18,
								color: '#363636'
							} }>{ article.summary }
							</Typography>
						</Container>
						<Container style={ { padding: '0 75px', margin: '35px auto 45px auto' } }>
							<Stack style={ { cursor: 'pointer', display: 'inline-flex' } } direction="row"
							       onClick={ handleClickOnBackBtn }>
								<WestOutlinedIcon/>
								<Typography component="p" style={ {
									marginLeft: 6,
									fontFamily: 'Montserrat',
									fontSize: 16,
									fontWeight: 700
								} }>
									Back to homepage
								</Typography>
							</Stack>
						</Container>
					</>
				) : (
					<Loading/>
				)
				}
			</div>
		)
	);
};

export default Article;