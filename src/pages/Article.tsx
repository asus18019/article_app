import React, { FC } from 'react';
import { Container, Stack, CardMedia, Typography, styled } from '@mui/material';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import { useNavigate, useParams } from 'react-router-dom';
import { selectPostById, selectPosts } from '../redux/post/slice';
import { useSelector } from 'react-redux';
import { Post, Status } from '../redux/post/types';
import Loading from '../components/Loading';
import NotFound from '../components/NotFound';

const TextContainer = styled(Container)({
	backgroundColor: '#fff',
	border: '1px solid #EAEAEA',
	boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
	borderRadius: 5
});

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
							sx={ {
								height: 235,
								position: 'absolute',
								top: 0,
								left: '50%',
								transform: 'translateX(-50%)',
								zIndex: -5
							} }
							component="img" image={ article.imageUrl }
						/>
						<TextContainer sx={{ p: { xs: '10px 20px', md: '35px 75px' }} }>
							<Typography variant="body1" component="h1" fontSize={ 24 } color="363636" textAlign="center">
								{ article.title }
							</Typography>
							<Typography variant="body1" component="p" fontSize={ 18 } color="#363636" sx={ { mt: '50px' } }>
								{ article.summary }
							</Typography>
						</TextContainer>
						<Container style={ { padding: '0 75px', margin: '35px auto 45px auto' } }>
							<Stack
								sx={ { cursor: 'pointer' } }
								direction="row"
								display='inline-flex'
								onClick={ handleClickOnBackBtn }
							>
								<WestOutlinedIcon/>
								<Typography component="p" fontSize={ 16 } fontWeight={ 700 } sx={ { ml: '6px' } }>
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