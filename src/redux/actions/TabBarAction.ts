import {
  CLOSE_POST_WRITE,
  HIDE_TABBAR,
  OPEN_POST_WRTIE,
  SHOW_TABBAR,
} from '../types/TabBarActionType';

export const showTabBar = () => ({type: SHOW_TABBAR});
export const hideTabBar = () => ({type: HIDE_TABBAR});
export const openPostWrite = () => ({type: OPEN_POST_WRTIE});
export const closePostWrite = () => ({type: CLOSE_POST_WRITE});
