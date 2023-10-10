import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './_counterSlice';


export default configureStore({
    reducer: {
        counter: counterReducer,
    },
});
