import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {closePostWrite, openPostWrite} from 'src/redux/actions/TabBarAction';

const usePostWriteTabBar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openPostWrite());
    return () => {
      dispatch(closePostWrite());
    };
  }, []);
};

export default usePostWriteTabBar;
