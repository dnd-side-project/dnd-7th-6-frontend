import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {hideTabBar, showTabBar} from 'src/redux/actions/TabBarAction';

const useHideTabBar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(hideTabBar());
    return () => {
      dispatch(showTabBar());
    };
  }, []);
};

export default useHideTabBar;
