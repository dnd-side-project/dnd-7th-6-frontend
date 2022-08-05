import {configureStore} from '@reduxjs/toolkit';
import {combineReducers, Reducer, Store} from 'redux';

import mapReducer from './reducers/mapReducer';
import postReducer from './reducers/postReducer';
import tabBarReducer from './reducers/tabBarReducer';

const rootReducer: Reducer = combineReducers({
  mapReducer,
  tabBarReducer,
  postReducer,
});

const store: Store = configureStore({reducer: rootReducer});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
