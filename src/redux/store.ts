import {configureStore} from '@reduxjs/toolkit';
import {combineReducers, Reducer, Store} from 'redux';

import mapReducer from './reducers/mapReducer';
import postReducer from './reducers/postReducer';
import postWriteReducer from './reducers/postWriteReducer';
import recommendReducer from './reducers/recommendReducer';
import reviewReducer from './reducers/reviewReducer';
import tabBarReducer from './reducers/tabBarReducer';
import termsReducer from './reducers/termsReducer';
import userReducer from './reducers/userReducer';

const rootReducer: Reducer = combineReducers({
  termsReducer,
  mapReducer,
  tabBarReducer,
  postReducer,
  reviewReducer,
  postWriteReducer,
  userReducer,
  recommendReducer,
});

const store: Store = configureStore({reducer: rootReducer});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
