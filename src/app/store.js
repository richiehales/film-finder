import { configureStore } from '@reduxjs/toolkit';
import searchResultsReducer from '../features/searchResults/searchResultsSlice'
import watchListReducer from '../features/watchList/watchListSlice'
import notificationsReducer from '../features/notifications/notificationsSlice'

export const store = configureStore({
  reducer: {
    movies: searchResultsReducer,
    watchList: watchListReducer,
    notifications: notificationsReducer
  },
});

