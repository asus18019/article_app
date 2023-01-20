import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import postSlice from './post/slice';

export const store = configureStore({
	reducer: {
		postSlice
	}
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();