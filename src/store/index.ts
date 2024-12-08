import { configureStore } from '@reduxjs/toolkit';
import containerMaker from './containerMaker';
import { actions as containerMakerActions } from "./containerMaker"

export const actions = {
    containerMaker: containerMakerActions,
}

const reducer = {
    containerMaker,
};

const store = configureStore({
    reducer,
});

export type State = ReturnType<typeof store.getState>;

export default store;
