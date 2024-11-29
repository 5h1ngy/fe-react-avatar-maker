// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import home, { State as HomeState } from './home';

export interface State {
    home: HomeState,
};

const store = configureStore({
    reducer: {
        home,
    },
});

export default store;
