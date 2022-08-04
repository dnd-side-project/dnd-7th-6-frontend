import {configureStore} from '@reduxjs/toolkit';
import {combineReducers, Reducer, Store} from 'redux';

import mapReducer from './reducers/mapReducer';

const rootReducer: Reducer = combineReducers({
  mapReducer,
});

const store: Store = configureStore({reducer: rootReducer});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
