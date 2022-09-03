import {AxiosError} from 'axios';
import {useQuery} from 'react-query';
import {useSelector} from 'react-redux';

import getUserLike from 'src/apis/getUserLike';
import {RootState} from 'src/redux/store';
import {UserLike} from 'src/types';

const useGetUserLike = () => {
  const {userInfo} = useSelector((state: RootState) => state.userReducer);
  const userInfoValid = Object.keys(userInfo).length !== 0;
  return useQuery<UserLike, AxiosError, UserLike, [string]>(['userLike'], getUserLike, {
    enabled: userInfoValid,
  });
};

export default useGetUserLike;
