import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { initialStateType, Post, Status } from './types';

const fetchUrl: string = 'https://api.spaceflightnewsapi.net/v3/articles';

const initialState: initialStateType = {
	status: Status.LOADING,
	posts: []
}

export const fetchPosts = createAsyncThunk<Post[]>(
	'posts/fetchPosts',
	async () => {
		const response = await fetch(fetchUrl);
		return await response.json();
	}
);

export const selectPosts = (state: RootState) => state.postSlice;
export const selectPostById = (id: number) => (state: RootState) => state.postSlice.posts.filter(post => post.id === id)[0];

const slice = createSlice({
	name: 'posts',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(fetchPosts.pending, (state) => {
			state.status = Status.LOADING;
			state.posts = [];
		});
		builder.addCase(fetchPosts.fulfilled, (state, action) => {
			state.status = Status.SUCCESS;
			state.posts = action.payload;
		});
		builder.addCase(fetchPosts.rejected, (state) => {
			state.status = Status.ERROR;
			state.posts = [];
		})
	}
})

export default slice.reducer;