import { configureStore } from '@reduxjs/toolkit';
import noteReducer from './noteSlice'
import tagsReducer from "./tagsSlice";
const store = configureStore({
    reducer: {
        notes: noteReducer,
        tags: tagsReducer
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;